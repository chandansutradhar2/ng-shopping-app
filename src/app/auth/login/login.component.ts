import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private apiSvc: ApiService) {}

  ngOnInit(): void {}

  login() {
    //getting value using #email and #password from view
    console.log(this.email, this.password);

    // this.apiSvc
    //   .authenticate('chandansutradhar2@gmail.com', 'Passw0rd')
    //   .then(() => {
    //     alert('login success');
    //   })
    //   .catch(() => alert('login failed'));
  }
}
