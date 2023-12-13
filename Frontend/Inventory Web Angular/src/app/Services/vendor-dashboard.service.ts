import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dealer } from '../Classes/dealer';
import { Item } from '../Classes/item';
import { Sale } from '../Classes/sale';

@Injectable({
  providedIn: 'root'
})
export class VendorDashboardService {
  
  private baseUrl = "http://localhost:8080/vendor";
  constructor(private httpClient: HttpClient) { }
  viewVendorById(id: string):Observable<Dealer> {
    return this.httpClient.get<Dealer>(`${this.baseUrl}/get/${id}`);
  }

  updateVendor(vendor:Dealer):Observable<Dealer>{
    return this.httpClient.post<Dealer>(`${this.baseUrl}/register`,vendor);
  }

  addItem(item:Item):Observable<Item>{
    return this.httpClient.post<Item>(`${this.baseUrl}/item`,item);
  }
  viewItem(id:string):Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseUrl}/item/${id}`);
  }
  deleteItem(itemId:number){
    this.httpClient.delete(`${this.baseUrl}/item/${itemId}`).subscribe();
  }

  viewItemById(id:string):Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseUrl}/item/get/${id}`);
  }

  viewSalesByVendorId(vendorId:number):Observable<Sale[]>{
    return this.httpClient.get<Sale[]>(`${this.baseUrl}/sales/${vendorId}`);
  }

  viewSaleById(saleId:number):Observable<Sale>{
    return this.httpClient.get<Sale>(`${this.baseUrl}/sale/${saleId}`);
  }
}
