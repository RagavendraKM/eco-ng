import { Injectable, HostListener } from '@angular/core';
import { Headers, RequestOptions, ResponseType, ResponseContentType } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: Http) { }
  @HostListener('window:resize', ['$event'])
  register(data) {
    return Observable.create((observer: Observer<any>) => {
      this.http.post("http://18.223.110.224:3000/user/register", data).subscribe((response) => {
        console.log(response)
        observer.next(response.json());
      });
    });
  }
  login(data) {
    return Observable.create((observer: Observer<any>) => {
      this.http.post("http://18.223.110.224:3000/user/login", data).subscribe((response) => {
        console.log(response)
        observer.next(response.json());
      });
    });
  }

  addProduct(data) {
    return Observable.create((observer: Observer<any>) => {
      this.http.post("http://18.223.110.224:3000/product/postProduct", data).subscribe((response) => {
        console.log(response)
        observer.next(response.json());
      });
    }); 
  }

  getProducts() {
    return Observable.create((observer: Observer<any>) => {
      this.http.get("http://18.223.110.224:3000/product/getProducts").subscribe((response) => {
        console.log(response)
        observer.next(response.json());
      });
    }); 
  }
  getCurrentUser() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'bearer');
    const options = new RequestOptions({ headers: headers });
    return Observable.create((observer: Observer<any>) => {
      this.http.get("https://indian-cities-api-nocbegfhqg.now.sh/cities", options).subscribe((response) => {
        observer.next(response.json());
      })
    })
  }

}
