import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Classes/customer';
import { Dealer } from '../Classes/dealer';
import { Item } from '../Classes/item';
import { Purchase } from '../Classes/purchase';
import { Sale } from '../Classes/sale';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private baseUrl = "http://localhost:8080/admin";
  constructor(private httpClient: HttpClient) { }


  // items section
  addItem(item:Item):Observable<object>{
    return this.httpClient.post(`${this.baseUrl+"/item"}`,item);
  }
  viewItem():Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseUrl+"/item"}`);
  }
  deleteItem(itemId:number){
    console.log(itemId)
    this.httpClient.delete(`${this.baseUrl}/item/${itemId}`).subscribe();
  }
  updateItem(item:any):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}/item`,item);
  }
  viewItemById(itemId:string):Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseUrl}/item/${itemId}`);
  }

  // customer Section
  addCustomer(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.baseUrl+"/customer"}`,customer);
  }
  viewCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseUrl+"/customer"}`);
  }
  deleteCustomer(customerId:number){
    this.httpClient.delete(`${this.baseUrl}/customer/${customerId}`).subscribe();
  }
  updateCustomer(customer:any):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.baseUrl}/customer`,customer);
  }
  viewCustomerById(customerId:string):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseUrl}/customer/${customerId}`);
  }

  // dealer Section
  addDealer(dealer:Dealer):Observable<Dealer>{
    return this.httpClient.post<Dealer>(`${this.baseUrl+"/vendor"}`,dealer);
  }
  viewDealer():Observable<Dealer[]>{
    return this.httpClient.get<Dealer[]>(`${this.baseUrl+"/vendor"}`);
  }
  deleteDealer(dealerId:number){
    this.httpClient.delete(`${this.baseUrl}/vendor/${dealerId}`).subscribe();
  }
  updateDealer(dealer:any):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.baseUrl}/vendor`,dealer);
  }
  viewDealerById(dealerId:string):Observable<Dealer>{
    return this.httpClient.get<Dealer>(`${this.baseUrl}/vendor/${dealerId}`);
  }
  deleteItemByVendorId(id:number){
    this.httpClient.delete(`${this.baseUrl}/vendor/item/${id}`).subscribe();
  }

  viewAllPurchase():Observable<Purchase[]>{
    return this.httpClient.get<Purchase[]>(`${this.baseUrl}/purchase`);
  }
  viewPurchaseById(purcahseId:number):Observable<Purchase>{
    return this.httpClient.get<Purchase>(`${this.baseUrl}/purchase/${purcahseId}`);
  }
  viewAllSales():Observable<Sale[]>{
    return this.httpClient.get<Sale[]>(`${this.baseUrl}/sale`);
  }
  viewSaleById(saleId:number):Observable<Sale>{
    return this.httpClient.get<Sale>(`${this.baseUrl}/sale/${saleId}`);
  }
}
