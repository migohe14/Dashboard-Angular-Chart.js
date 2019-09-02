import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: { name: string, price: number, image: string }[] = [{name: "Camera", price: 900, image: "../../assets/camera.jpg"}, {name: "Clock", price: 300, image: "../../assets/clock.jpg"}, {name: "Glasses", price: 450, image: "../../assets/glasses.jpg"}];

  constructor() { }

  ngOnInit() {
  }

}
