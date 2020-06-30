import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import {ConfigService} from "./config.service";
import {shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private appConfigService: ConfigService) {}

  public _get(url, params={}) {
    let headers = new HttpHeaders();
    return this.http.get(this.appConfigService.apiBaseUrl+url, {
      params: params,
      headers: headers
    });
     // .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  public _post(url, body, params = {}) {
    let headers = new HttpHeaders();
    return this.http.post(this.appConfigService.apiBaseUrl+url, body, {
      params: params,
      headers: headers
    });
    // .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

}
