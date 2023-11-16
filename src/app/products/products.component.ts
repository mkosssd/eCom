import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { isPlatformBrowser } from '@angular/common'
import {
  Component,
  Inject,
  Injectable,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ChangeDetectionStrategy
} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Options } from 'ngx-slider-v2'
import { Subscription } from 'rxjs'
import { distinctUntilChanged, tap } from 'rxjs/operators'
import { CartDataService, Product } from '../shared/cart-data.service'
import { ProductService } from './products/product.service'
import {
  FixedSizeVirtualScrollStrategy,
  ScrollingModule,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';

export interface Categories {
  id: number
  name: string
}
@Injectable({ providedIn: 'root' })
export class ServiceNameService { }
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(
    private cartServ: CartDataService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.isBrowser = isPlatformBrowser(platformId)
  }
  isBrowser: boolean
  ObsSubs: Subscription
  products: any
  pageId: number = 1
  prods: any
  isLoading: boolean = false
  resp: any
  productsSorted: any
  totalPages: number
  pagesArray: number[]
  categories: any
  indexArray: number[]
  sortMeth: string
  minValue = 0
  maxValue = 0
  defCategoryRoute = ''
  isSideBarOpen = false
  selectedFilters = {}
  options: Options
  selectedFiltersSorted = []

  ngOnInit(): void {
    this.getData()
    this.getCategories()
    this.options = {
      floor: 0,
      ceil: 2000,
      step: 100,
      translate: (value: number): string => {
        return '$ ' + value
      }
    }
    this.breakpoint$.subscribe(() => this.breakpointChanged())
  }

  ngOnDestroy(): void {
    this.ObsSubs.unsubscribe()
  }
  Breakpoints = Breakpoints
  currentBreakpoint: string = ''

  readonly breakpoint$ = this.breakpointObserver
    .observe([
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      '(min-width: 500px)'
    ])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    )

  toggleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen
    let list = document.getElementById('sideBar').classList
    if (list.contains('resposiveSideBar')) {
      list.remove('resposiveSideBar')
    } else {
      list.add('resposiveSideBar')
    }
  }
  viewportLength = ''

  getData() {
    this.minValue = 0
    this.maxValue = 0
    this.route.queryParams.subscribe(res => {
      if (res['price_min'] && res['price_max']) {
        this.minValue = +res['price_min']
        this.maxValue = +res['price_max']
      } else if (res['price_min']) {
        this.minValue = +res['price_min']
        this.maxValue = 2000
      } else if (res['price_max']) {
        this.maxValue = +res['price_max']
        this.minValue = 0
      } else {
        this.minValue = 0
        this.maxValue = 2000
      }
      this.selectedFilters = res
      this.selectedFiltersSorted = []
      for (const key in this.selectedFilters) {
        if (key == 'category') {
          this.selectedFiltersSorted.push({
            key,
            value: this.selectedFilters[key],
            id: key
          })
        } else if (key == 'price_min') {
          this.selectedFiltersSorted.push({
            key: 'Min Price',
            value: this.selectedFilters[key],
            id: key
          })
        } else if (key == 'sort') {
          this.selectedFiltersSorted.push({
            key,
            value:
              this.selectedFilters[key] == 'asec'
                ? 'Low To High'
                : 'High To Low',
            id: key
          })
        } else if (key == 'price_max') {
          this.selectedFiltersSorted.push({
            key: 'Max Price',
            value: this.selectedFilters[key],
            id: key
          })
        }
      }

      this.pageId = res['page']

      this.sortMeth = res['sort']

      let storedPro = localStorage.getItem('cart') || '[]'

      this.prods = JSON.parse(storedPro)

      this.defCategoryRoute = ''

      this.ObsSubs = this.productService
        .getProducts()
        .subscribe((res: Product[]) => {
          this.products = res
          this.viewportLength = `${this.products.length * 230}px`

          this.productsSorted = res.map(val => {
            let index = this.prods.findIndex(({ id }) => id === val.id)

            if (index >= 0) {
              return {
                ...val,
                isAdd: true,
                amount: this.prods[index].amount
              }
            } else {
              return { ...val, isAdd: false }
            }
          })

          // this.totalPages = Math.ceil(this.productsSorted.length / 10);

          // this.pagesArray = Array.from(
          //   { length: this.totalPages },
          //   (_, i) => i + 1
          // );

          // this.indexArray = [];
          // this.pagesArray.map((page) => this.indexArray.push((page - 1) * 10));

          // this.products = this.productsSorted.splice(
          //   this.indexArray[this.pageId - 1],
          //   10
          // );

          this.isLoading = false
        })
    })

    this.getCategories()
  }

  productCart(index: number, method: string) {
    this.cartServ.data(this.products[index], method)
    this.getData()
  }

  toggleCart(index: number) {
    this.productCart(index, 'add')
    this.products[index].isAdd = !this.products[index].isAdd
  }

  page(method: string) {
    if (isNaN(this.pageId)) {
      this.pageId = 1
    }
    this.isLoading = true
    if (method === 'next') {
      this.router.navigate(['/products'], {
        queryParams: { page: +this.pageId + 1 },
        queryParamsHandling: 'merge'
      })
    } else {
      this.router.navigate(['/products'], {
        queryParams: { page: +this.pageId - 1 },
        queryParamsHandling: 'merge'
      })
    }
    this.getCategories()
    this.isLoading = false
  }

  numbPage(page: any) {
    this.isLoading = true

    this.router.navigate(['/products'], {
      queryParams: { page: page },
      queryParamsHandling: 'merge'
    })

    this.isLoading = false
  }

  priceFilter(range, method: string) {
    let pageNum = 0

    this.route.queryParams.subscribe(res => {
      pageNum = res['page']
    })
    if (method == 'max') {
      if (range == 2000) {
        this.removeFilter('price_max')
      } else {
        this.router.navigate(['/products'], {
          queryParams: {
            price_max: `${range}`
          },
          queryParamsHandling: 'merge'
        })
      }
    } else if (method == 'min') {
      if (range == 0) {
        this.removeFilter('price_min')
      } else {
        this.router.navigate(['/products'], {
          queryParams: {
            price_min: `${range}`
          },
          queryParamsHandling: 'merge'
        })
      }
    }
  }

  priceRangeFilter(event) {
    if (event.pointerType == 1) {
      this.priceFilter(event.highValue, 'max')
    } else {
      this.priceFilter(event.value, 'min')
    }
  }

  getCategories() {
    this.productService.getCategories().subscribe((res: any) => {
      this.categories = Object.keys(res).map(key => ({
        id: key,
        name: res[key],
        checked: this.defCategoryRoute == res[key] ? true : false
      }))

      this.route.queryParams.subscribe(res => {
        let category = res['category']

        let ind = this.categories.find(e => e.name === category)

        if (ind) {
          this.defCategoryRoute = ind.name
        }
      })
    })
  }

  categoryFilter(val) {
    this.router.navigate(['/products'], {
      queryParams: {
        category: val.checked ? val.name : null,
        page: null
      },
      queryParamsHandling: 'merge'
    })
  }

  //to add sort route to url

  addSort(method) {
    this.router.navigate(['products'], {
      queryParams: { sort: method, page: null },
      queryParamsHandling: 'merge'
    })
  }

  //To detect change in category

  onCheckboxChange() {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.defCategoryRoute != this.categories[i].name) {
        this.categories[i].checked = true
      } else {
        this.categories[i].checked = false
      }
    }
  }

  //To remove filters

  removeFilter(type: string) {
    if (type == 'category') {
      this.router.navigate(['products'], {
        queryParams: { category: null },
        queryParamsHandling: 'merge'
      })
    } else if (type == 'price_min') {
      this.router.navigate(['products'], {
        queryParams: { price_min: null },
        queryParamsHandling: 'merge'
      })
    } else if (type == 'sort') {
      this.router.navigate(['products'], {
        queryParams: { sort: null },
        queryParamsHandling: 'merge'
      })
    } else if (type == 'price_max') {
      this.router.navigate(['products'], {
        queryParams: { price_max: null },
        queryParamsHandling: 'merge'
      })
    }
  }
  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small
    } else if (this.breakpointObserver.isMatched('(min-width: 500px)')) {
      this.currentBreakpoint = '(min-width: 500px)'
    }
  }
}