import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/ngx-bootstrap-pagination';
import { LiteralExpr } from '@angular/compiler';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {
  imageUrl: string = "/assets/car-1.jpg";
  paginatedItems = [];
  items = [];
  currentPage = 1;
  startItems = [
    {
      imageItem: "/assets/car-2.jpg",
      title: "Car 2",
      price: 1234
    },
    {
      imageItem: "/assets/car-3.jpg",
      title: "Car 3",
      price: 12234
    },
    {
      imageItem: "/assets/car-4.jpg",
      title: "Car 4",
      price: 132534
    },
    {
      imageItem: "/assets/car-5.jpg",
      title: "Car 5",
      price: 12134
    },
    {
      imageItem: "/assets/car-2.jpg",
      title: "Car 2",
      price: 81234
    },
    {
      imageItem: "/assets/car-4.jpg",
      title: "Car 4",
      price: 13234
    },
    {
      imageItem: "/assets/car-5.jpg",
      title: "Car 5",
      price: 15234
    },
    {
      imageItem: "/assets/car-3.jpg",
      title: "Car 3",
      price: 12334
    },
    {
      imageItem: "/assets/car-2.jpg",
      title: "Car 2",
      price: 1234
    },
    {
      imageItem: "/assets/car-1.jpg",
      title: "Car 1",
      price: 1234
    },
    {
      imageItem: "/assets/car-4.jpg",
      title: "Car 4",
      price: 1234
    },
    {
      imageItem: "/assets/car-2.jpg",
      title: "Car 2",
      price: 1234
    },
    {
      imageItem: "/assets/car-2.jpg",
      title: "Car 2",
      price: 1234
    },
    {
      imageItem: "/assets/car-3.jpg",
      title: "Car 3",
      price: 1234
    },
    {
      imageItem: "/assets/car-4.jpg",
      title: "Car 4",
      price: 1234
    },
    {
      imageItem: "/assets/car-5.jpg",
      title: "Car 5",
      price: 1234
    },
    {
      imageItem: "/assets/car-2.jpg",
      title: "Car 2",
      price: 1234
    },
    {
      imageItem: "/assets/car-4.jpg",
      title: "Car 4",
      price: 1234
    },
    {
      imageItem: "/assets/car-5.jpg",
      title: "Car 5",
      price: 1234
    },
    {
      imageItem: "/assets/car-3.jpg",
      title: "Car 3",
      price: 1234
    },
    {
      imageItem: "/assets/car-2.jpg",
      title: "Car 2",
      price: 1234
    },
    {
      imageItem: "/assets/car-1.jpg",
      title: "Car 1",
      price: 1234
    },
    {
      imageItem: "/assets/car-4.jpg",
      title: "Car 4",
      price: 1234
    },
    {
      imageItem: "/assets/car-2.jpg",
      title: "Car 2",
      price: 1234
    },
    {
      imageItem: "/assets/car-5.jpg",
      title: "Car 5",
      price: 12342
    },
  ]
  constructor(private sanitizer: DomSanitizer ) {
   }

  ngOnInit(): void {
    this.items = this.startItems;
    this.paginatedItems = this.items.slice(0, 6)
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

  pageChanged(event: PageChangedEvent): void {
    console.log(this.items.length);
    const startItem = (event.page - 1) * 6;
    const endItem = event.page * 6;
    this.paginatedItems = this.items.slice(startItem, endItem);
  }

  sortByPrice(){
    this.startItems = this.startItems.sort((firstItem: any, secondItem: any)=>
    {
      if(firstItem.price > secondItem.price) return -1;
      if(firstItem.price < secondItem.price) return 1;
      return 0;
    });
    this.ngOnInit();
  }

  sortByName(){
    this.startItems = this.startItems.sort((firstItem: any, secondItem: any)=>
    {
      if(firstItem.title > secondItem.title) return -1;
      if(firstItem.title < secondItem.title) return 1;
      return 0;
    })
    this.ngOnInit();
  }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
}
