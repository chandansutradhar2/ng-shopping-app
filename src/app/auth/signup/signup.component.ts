import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  items: string[] = ['Customer', 'Seller', 'Vendor'];
  frmGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmGroup = fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      mobileNo: ['', [, Validators.pattern(/^[0-9]*$/)]],
      userType: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  createAccount() {
    console.log(this.frmGroup.value, this.frmGroup.valid);
  }
}
