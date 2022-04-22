import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private apiSvc: ApiService) {}

  ngOnInit(): void {}

  login(val1: any, val2: any) {
    //getting value using #email and #password from view
    console.log(val1.value, val2.value);
    // this.apiSvc
    //   .authenticate('chandansutradhar2@gmail.com', 'Passw0rd')
    //   .then(() => {
    //     alert('login success');
    //   })
    //   .catch(() => alert('login failed'));
  }
}
