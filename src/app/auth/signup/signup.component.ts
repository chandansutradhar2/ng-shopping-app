import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
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
    private apiSvc: ApiService,
    private fb: FormBuilder,
    private emailCheckValidator: AsyncEmailValidator,
    private router: Router,
    private snackbar: MatSnackBar
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
    if (this.frmGroup.invalid) {
      this.frmGroup.markAllAsTouched();
      return;
    }

    let user: User = this.frmGroup.value;
    this.apiSvc
      .createUser(user)
      .then((res) => {
        this.snackbar.open('Account created succesfully', 'ok', {
          duration: 10000,
        });

        //code to redirect..
        this.router.navigate(['']);
      })
      .catch((err) => {
        this.snackbar.open(err, 'retry', {
          duration: 15000,
        });
      });
    console.log(user);
  }
}
