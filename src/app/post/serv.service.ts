import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MapObj} from "./servie";

@Injectable({
  providedIn: 'root'
})
export class ServService {
  Url: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  get serv() {
    return this.http.get<MapObj[]>(this.Url)
  }

  get httpElement() {
    return this.http
  }
  get myUrl() {
    return this.Url
  }
}

