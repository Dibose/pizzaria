import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css'],
})
export class PizzalistComponent implements OnInit {
  constructor(private cr: PizzasService, public conn: ConnectionService) {}
  pizzas;
  dt: any;
  dataDisplay: any;
  // toggle: boolean ;
  ngOnInit(): void {
    this.cr.getPizza().subscribe((data) => {
      this.pizzas = data;
    });
  }
  sendCart(p) {
    // this.toggle = !this.toggle;
    // if (!this.toggle) {
    //   alert('Item removed successfully!!!');
    //   this.cr.deleteItem(p);
    // } else {
      alert('Item added successfully!!!');
      this.cr.getCart(p);
    // }
  }
  // oneDel(de) {
  //   alert('Item removed successfully!!!');
  //   this.cr.deleteItem(de);
  // }
  // clicked: boolean = false;
  // myFunction(d) {
  //   if (!this.clicked) {
  //     this.clicked = true;
  //     document.getElementById('bttn').innerHTML = 'Remove';
  //     this.sendCart(d);
  //   } else {
  //     this.clicked = false;
  //     document.getElementById('btn').innerHTML = 'Order Now';
  //     this.oneDel(d);
  //   }
  // }
}
