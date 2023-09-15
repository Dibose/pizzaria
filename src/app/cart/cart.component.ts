import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../pizzas.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private ps: PizzasService, public router: Router) {
    // this.ps.listen().subscribe((m) => {
    //   this.allData();
    // });
  }
  // refresh$= new BehaviorSubject<boolean>(true);
  // item$: Observable<any>;
  item;
  ing;
  cost: number = 0;
  costing: number = 0;
  totalCost: number = 0;
  count: number = 0;

  ngOnInit(): void {
    // this.item$ = this.refresh$.pipe(switchMap(_=>this.ps.getValue()));
    this.ps.getValue().subscribe((data) => {
      this.item = data;
      this.addPrice();
    });
    this.ps.cartDiff().subscribe((dat) => {
      this.ing = dat;
      this.addPriceIng();
    });
  }
  // reloadCurrentRoute() {
  //   let currentUrl = this.router.url;
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([currentUrl]);
  //   });
  // }
  // allData() {
  //   this.ps.getValue().subscribe((data) => {
  //     this.item = data;
  //     // this.addPrice();
  //   });
  // }

  plus(q) {
    this.ps.inc(q);
    location.reload();
    // this.refresh$.next(true);
    // this.ps.filter(q);
    // let currentUrl = this.router.url;
    // this.router.navigate([currentUrl]);
  }
  minus(q) {
    this.ps.dec(q);
    location.reload();
    // this.reloadCurrentRoute();
    // this.ps.filter(q);
  }
  addPrice() {
    for (let e = 0; e < this.item.length; e++) {
      this.cost += this.item[e].price * this.item[e].quantity;
    }
    this.totalPrice();
  }
  addPriceIng() {
    for (let i = 0; i < this.ing.length; i++) {
      this.costing += this.ing[i].price;
    }
    this.totalPrice();
  }
  totalPrice() {
    this.totalCost = this.cost + this.costing;
  }
  oneDelete(de) {
    alert('Item removed successfully!!!');
    this.ps.deleteItem(de);
    location.reload();
  }
  clearCart() {
    this.ps.deleteAllitems();
    if (this.ing.length > 0) {
      this.ps.deleteAllitemsIng();
    }
    location.reload();
    // this.item = [];
  }
}

// history(all) {
//   this.ps.traceHistory(all);
// }
// for (let i = 0; i < this.item.length; i++) {
//   this.item[i].quantity = 1;
// }
// console.log(this.item);
