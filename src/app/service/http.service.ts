import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AstroTarget } from '../model/astro-target';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  firebaseUrl: string = environment.apiURL;
  entity: string = 'astro.json';

  constructor(private http: HttpClient) {}

  fetchTargets() {
    return this.http
      .get<{ [key: string]: AstroTarget }>(`${this.firebaseUrl}${this.entity}`)
      .pipe(
        map((responseData) => {
          const productArray: AstroTarget[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productArray.push({ ...responseData[key], uniqueId: key });
            }
          }
          return productArray;
        })
      );
  }

  addTarget(newTarget: AstroTarget) {
    return this.http.post(`${this.firebaseUrl}${this.entity}`, newTarget);
  }

  deleteTarget(target: AstroTarget) {
    return this.http.delete(`${this.firebaseUrl}astro/${target.uniqueId}.json`);
  }

  updateTarget(target: AstroTarget) {
    return this.http.patch(
      `${this.firebaseUrl}astro/${target.uniqueId}.json`,
      target
    );
  }
}
