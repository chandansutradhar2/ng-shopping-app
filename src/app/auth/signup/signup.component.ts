import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AsyncEmailValidator } from 'src/app/validators/email.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  items: string[] = ['Customer', 'Seller', 'Vendor'];
  frmGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailCheckValidator: AsyncEmailValidator
  ) {
    this.frmGroup = fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      email: [
        '',
        [Validators.required, Validators.email],
        [emailCheckValidator],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      mobileNo: ['', [, Validators.pattern(/^[0-9]*$/)]],
      userType: ['', [Validators.required]],
    });

    //this.frmGroup.controls['test'].hasError;
    this.frmGroup.get('mobileNo')?.valueChanges.subscribe((r) => {
      console.log(r);
    });
  }

  ngOnInit(): void {}

  public get form() {
    return this.frmGroup.controls;
  }

  createAccount() {
    debugger;
    if (this.frmGroup.invalid) {
      return;
    }

    let user: User = this.frmGroup.value;

    console.log(user);
  }
}
