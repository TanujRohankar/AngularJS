import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = "http://localhost:8000/api/products";
  //  list:any=[
  //     {"id": 12,  "title":"Lotus", "description": "Wedding flower","price":24 , "likes":800, "imageurl":"/assets/images/lotus.jpg","discount":"3","quantity":"3"},
  //     {"id": 13,  "title":"Rose", "description": "Valentine flower","price":14, "likes":4000, "imageurl":"/assets/images/rose.jpg","discount":"10", "quantity":"10"},
  //     {"id": 14,  "title":"Jasmine", "description": "Smelling flower","price":3, "likes":9000, "imageurl":"/assets/images/jasmine.jpg","discount":"12", "quantity":"4"},
  //     {"id": 15,  "title":"Tulip", "description": "Beautiful flower","price":16, "likes":3000, "imageurl":"/assets/images/tulip.jpg","discount":"0", "quantity":"9"},
  //     {"id": 16,  "title":"Lily", "description": "Delicate flower","price":9,"likes":6000, "imageurl":"/assets/images/lily.jpg","discount":"7", "quantity":"0"},
  //     {"id": 17,  "title":"Marigold", "description": "Festival flower","price":4,"likes":56000, "imageurl":"/assets/images/marigold.jpg","discount":"0","quantity":"7"}
  // ];

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // updateProduct(prod:any):void
  updateProduct(prod: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${prod.id}`, prod);
  }
}
