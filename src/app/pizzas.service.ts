import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http1: HttpClient) {}
  // url1: string = 'http://localhost:4200/../assets/pizza.json';
  url1: string = 'http://localhost:4000';
  getPizza() {
    return this.http1.get(this.url1 + '/pizzas');
  }
  // count: number = 0;
  getCart(data) {
    this.http1.post(this.url1 + '/cart', data).subscribe((res) => {});
    // this.count += 1;
  }
  sendIngredients(dat) {
    this.http1
      .post(this.url1 + '/orderingredients', dat)
      .subscribe((res) => {});
  }
  // getValue(): Observable<any> {
  getValue() {
    return this.http1.get(this.url1 + '/displaycart');
  }
  deleteItem(del) {
    this.http1.post(this.url1 + '/delete', del).subscribe((res) => {});
    // this.count--;
  }
  deleteAllitems() {
    this.http1.post(this.url1 + '/emptycart', '').subscribe((res) => {});
  }
  deleteAllitemsIng() {
    this.http1.post(this.url1 + '/emptycarting', '').subscribe((res) => {});
  }
  getIngredients() {
    return this.http1.get(this.url1 + '/ingredients');
  }
  traceHistory(s) {
    this.http1.post(this.url1 + '/ordertrace', s).subscribe((res) => {});
  }
  cartDiff() {
    return this.http1.get(this.url1 + '/displaycarting');
  }
  inc(s) {
    this.http1.post(this.url1 + '/increaseQuantity', s).subscribe((res) => {});
  }
  dec(s) {
    this.http1.post(this.url1 + '/decreaseQuantity', s).subscribe((res) => {});
  }

  // private listeners = new Subject<any>();
  // listen(): Observable<any>{
  //   return this.listeners.asObservable();
  // }
  // filter(f) {
  //   this.listeners.next(f);
  // }
}
