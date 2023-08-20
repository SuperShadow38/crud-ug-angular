import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getXmlData(): Observable<any> {
    const url = 'PON_AQUI_LA_URL_DE_LA_API';
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((xmlData: string) => {
        let jsonData;
        xml2js.parseString(xmlData, (err, result) => {
          jsonData = result;
        });
        return jsonData;
      })
    );
  }
}
