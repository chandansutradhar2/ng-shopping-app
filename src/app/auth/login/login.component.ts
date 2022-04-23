import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  agreeOnTerms: FormControl;
  constructor(private apiSvc: ApiService) {
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);

    this.agreeOnTerms = new FormControl(true);
  }

  ngOnInit(): void {}

  login() {
    //getting value using #email and #password from view
    console.log(this.email.value, this.password.value);

    this.apiSvc
      .authenticate(this.email.value, this.password.value)
      .then(() => {
        alert('login success');
      })
      .catch(() => alert('login failed'));
  }
}
