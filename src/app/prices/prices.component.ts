import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.sass']
})
export class PricesComponent implements OnInit {
  imageUrl: string = "/assets/prices/car.jpg";

  items = [
    {
      imageItem : "/assets/prices/moto.jpg",
      title : "Мототранспорт",
      price : "від 400 грн"
    },
    {
      imageItem : "/assets/prices/car.jpg",
      title : "Легковий",
      price : "від 400 грн"
    },
    {
      imageItem : "/assets/prices/jeep.jpg",
      title : "Позашляховик",
      price : "від 400 грн"
    },
    {
      imageItem : "/assets/prices/small-ship.jpg",
      title : "Човен, катер, яхта",
      price : "від 720 грн"
    },
    {
      imageItem : "/assets/prices/spec-car.jpg",
      title : "Спецтехніка",
      price : "від 940 грн"
    },
    {
      imageItem : "/assets/prices/truck.jpg",
      title : "Вантажівка",
      price : "від 740 грн"
    },
    {
      imageItem : "/assets/prices/bus.jpg",
      title : "Автобус",
      price : "від 450 грн"
    }
  ]
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  
  sanitize(style) {
    return this.sanitizer.bypassSecurityTrustUrl(style);
  }
  setImageProfile(imageUrl: string) {
    if (imageUrl == null) {
      return this.imageUrl;
    }
    return imageUrl;
  }
}
