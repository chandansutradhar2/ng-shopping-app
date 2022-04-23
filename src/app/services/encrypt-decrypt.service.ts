import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncryptDecryptService {
  encryptData(data: any) {
    let ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      environment.key
    ).toString();

    return ciphertext;
  }
}
