import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../pizzas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private ser: PizzasService) {}

  ngOnInit(): void {
    // this.getCount();
  }
  // count;
  // getCount() {
  //   this.count = this.ser.cnt;
  // }
}
