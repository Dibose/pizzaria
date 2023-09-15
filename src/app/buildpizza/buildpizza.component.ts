import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css'],
})
export class BuildpizzaComponent implements OnInit {
  constructor(private ar: PizzasService, public conn: ConnectionService) {}
  items;
  sum: number = 0;
  ngOnInit(): void {
    this.ar.getIngredients().subscribe((data) => {
      this.items = data;
    });
  }
  additem = [];
  getCost(s, isChecked: boolean) {
    if (isChecked) {
      this.sum += s.price;
      this.additem.push(s);
      // this.ar.sendIngredients(s);
    } else {
      this.sum -= s.price;
      this.delete(s);
      // this.ar.deleteItem(s);
    }
  }
  delete(p) {
    for (let i = 0; i < this.additem.length; i++) {
      if (this.additem[i] == p) {
        this.additem.splice(i, 1);
      }
    }
  }
  sendItem() {
    this.ar.sendIngredients(this.additem);
    location.replace('http://localhost:4200/cart');
  }
}
