import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./servises/products.service";
import {Daum} from "./component/product/interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
  implements OnInit
{
  title = 'online-shop';

  products: Daum[] = []

  constructor(private _productService: ProductsService) {
  }

  ngOnInit() {
    this._productService.getProducts().subscribe(resp => {
      this.products = resp.data
      console.log('this.products', this.products)
    })
  }
}
