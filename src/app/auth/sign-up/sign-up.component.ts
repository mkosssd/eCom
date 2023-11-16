import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private auth: AuthService) {}
  authForm: FormGroup;
  confirmPassword = '';
  errorMessage:string;
  isError=false
  inputPassword = '';
  ifMatched: boolean = true;
  passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  isValid = false;
  numEx = /^[A-Za-z]+$/;
  ngOnInit(): void {
    this.authForm = new FormGroup({
     firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.numEx),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.numEx),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      inputPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.passwordRegex),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.passwordRegex),
        
      ]),
    });
  }

  onSubmit() {
    console.log(this.authForm);
    this.auth.signup(this.authForm.value).subscribe(res => { }, errorMessage => {
      this.errorMessage = errorMessage
      this.isError = true
    });
  }

  passwordMatch() {
    if (this.confirmPassword === this.inputPassword) {
      this.ifMatched = true;
    } else {
      this.ifMatched = false;
    }
  }
}
