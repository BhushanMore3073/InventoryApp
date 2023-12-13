import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Classes/customer';
import { Dealer } from '../Classes/dealer';
import { Item } from '../Classes/item';
import { Purchase } from '../Classes/purchase';

@Injectable({
  providedIn: 'root'
})
export class CustomerDashboardService {

  private baseUrl = "http://localhost:8080/customer";
  constructor(private httpClient: HttpClient) { }

  viewItemById(itemId:string):Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseUrl}/item/${itemId}`);
  }

  viewAllItems():Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseUrl}/item`);
  }

  viewCustomerById(customerId:string):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseUrl}/get/${customerId}`);
  }

  updateCustomer(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.baseUrl}/`,customer);
  }

  viewVendorById(vendorId:string):Observable<Dealer>{
    return this.httpClient.get<Dealer>(`http://localhost:8080/vendor/get/${vendorId}`);
  }

  generatePurchase(purchase:Purchase):Observable<Purchase>{
    return this.httpClient.post<Purchase>(`${this.baseUrl}/purchase`,purchase);
  }
  getAllPurchase(custId:number):Observable<Purchase[]>{
    return this.httpClient.get<Purchase[]>(`${this.baseUrl}/purchase/get/${custId}`);
  }
  getPurchaseById(purchaseId:number):Observable<Purchase>{
    return this.httpClient.get<Purchase>(`${this.baseUrl}/purchase/${purchaseId}`);
  }
  
}
