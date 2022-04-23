import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { EncryptDecryptService } from './encrypt-decrypt.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private encryptSvc: EncryptDecryptService
  ) {}

  authenticate(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http
        .post('http://localhost:3000/api/user/login', {
          password: password,
          email: email,
        })
        .subscribe((res: any) => {
          if (res.result) {
            resolve(res);
          } else {
            reject(res.message);
          }
        });
    });
  }

  createUser(user: User) {
    return new Promise((resolve, reject) => {
      let data = this.encryptSvc.encryptData(user);
      this.http
        .post('http://localhost:3000/api/user/signup', {
          data: data,
        })
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
