import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Classes/admin';
import { Customer } from '../Classes/customer';
import { Dealer } from '../Classes/dealer';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  
  private baseUrl = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }
  
  
  doAdminLogin(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(`${this.baseUrl+"/admin/login"}`,admin);
  }
  
  // CUSTOMER LOGIN
  customerRegister(customer:Customer):Observable<Customer>{
      return this.httpClient.post<Customer>(`${this.baseUrl+"/customer/register"}`,customer);
  }
  
  customerLogin(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.baseUrl+"/customer/login"}`,customer);
  }

  customerForgot(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.baseUrl}/customer/forgot`,customer);
  }
  
  //VENDOR LOGIN
  vendorLogin(dealer: Dealer):Observable<Dealer> {
    return this.httpClient.post<Dealer>(`${this.baseUrl}/vendor/login`,dealer);
  }

  vendorRegister(vendor:Dealer):Observable<Dealer>{
    return this.httpClient.post<Dealer>(`${this.baseUrl}/vendor/register`,vendor);
  }

  vendorForgot(vendor:Dealer):Observable<Dealer>{
    return this.httpClient.post<Dealer>(`${this.baseUrl}/vendor/forgot`,vendor);
  }

}

