import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsyncEmailValidator implements AsyncValidator {
  constructor(private http: HttpClient) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.http
      .post('http://localhost:3000/api/user/exists', {
        email: control.value,
      })
      .pipe(map((status) => (status ? { emailExists: true } : null)));
  }
}
