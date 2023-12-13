import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CheckLoginComponent } from './Components/login/check-login/check-login.component';
import { AdminLoginComponent } from './Components/login/admin-login/admin-login.component';
import { CustomerLoginComponent } from './Components/login/customer-login/customer-login.component';
import { VendorLoginComponent } from './Components/login/vendor-login/vendor-login.component';
import { CustomerRegisterComponent } from './Components/register/customer-register/customer-register.component';
import { SecondNavbarComponent } from './Components/login/second-navbar/second-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { VendorRegisterComponent } from './Components/register/vendor-register/vendor-register.component';
import { AdminDashboardComponent } from './Components/dashboard/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './Components/dashboard/customer-dashboard/customer-dashboard.component';
import { VendorDashboardComponent } from './Components/dashboard/vendor-dashboard/vendor-dashboard.component';
import { AddItemComponent } from './Components/dashboard/add-item/add-item.component';
import { AdminHeaderComponent } from './Components/dashboard/admin-dashboard/admin-header/admin-header.component';
import { ViewItemsComponent } from './Components/dashboard/admin-dashboard/view-items/view-items.component';
import { UpdateItemComponent } from './Components/dashboard/admin-dashboard/update-item/update-item.component';
import { ViewDealersComponent } from './Components/dashboard/admin-dashboard/view-dealers/view-dealers.component';
import { UpdateDealersComponent } from './Components/dashboard/admin-dashboard/update-dealers/update-dealers.component';
import { ViewCustomerComponent } from './Components/dashboard/admin-dashboard/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './Components/dashboard/admin-dashboard/update-customer/update-customer.component';
import { AdminRegisterCustomerComponent } from './Components/dashboard/admin-dashboard/admin-register-customer/admin-register-customer.component';
import { AdminRegisterDealerComponent } from './Components/dashboard/admin-dashboard/admin-register-dealer/admin-register-dealer.component';
import { CustomerHeaderComponent } from './Components/dashboard/customer-dashboard/customer-header/customer-header.component';
import { CustomerProfileComponent } from './Components/dashboard/customer-dashboard/customer-profile/customer-profile.component';
import { CustomerViewItemComponent } from './Components/dashboard/customer-dashboard/customer-view-item/customer-view-item.component';
import { CustomerPurchaseItemComponent } from './Components/dashboard/customer-dashboard/customer-purchase-item/customer-purchase-item.component';
import { VendorProfileComponent } from './Components/dashboard/vendor-dashboard/vendor-profile/vendor-profile.component';
import { VendorHeaderComponent } from './Components/dashboard/vendor-dashboard/vendor-header/vendor-header.component';
import { VendorAddItemComponent } from './Components/dashboard/vendor-dashboard/vendor-add-item/vendor-add-item.component';
import { VendorViewItemsComponent } from './Components/dashboard/vendor-dashboard/vendor-view-items/vendor-view-items.component';
import { VendorUpdateItemComponent } from './Components/dashboard/vendor-dashboard/vendor-update-item/vendor-update-item.component';
import { CustomerConfirmPageComponent } from './Components/dashboard/customer-dashboard/customer-confirm-page/customer-confirm-page.component';
import { CustomerPurchaseHistoryComponent } from './Components/dashboard/customer-dashboard/customer-purchase-history/customer-purchase-history.component';
import { CustomerViewPurchaseComponent } from './Components/dashboard/customer-dashboard/customer-view-purchase/customer-view-purchase.component';
import { VendorViewSaleComponent } from './Components/dashboard/vendor-dashboard/vendor-view-sale/vendor-view-sale.component';
import { VendorSaleHistoryComponent } from './Components/dashboard/vendor-dashboard/vendor-sale-history/vendor-sale-history.component';
import { AdminSalesComponent } from './Components/dashboard/admin-dashboard/admin-sales/admin-sales.component';
import { AdminPurchaseComponent } from './Components/dashboard/admin-dashboard/admin-purchase/admin-purchase.component';
import { AdminViewSaleComponent } from './Components/dashboard/admin-dashboard/admin-view-sale/admin-view-sale.component';
import { AdminViewPurchaseComponent } from './Components/dashboard/admin-dashboard/admin-view-purchase/admin-view-purchase.component';
import { ForgotCustomerComponent } from './Components/login/forgot-customer/forgot-customer.component';
import { ForgotVendorComponent } from './Components/login/forgot-vendor/forgot-vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CheckLoginComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    VendorLoginComponent,
    CustomerRegisterComponent,
    SecondNavbarComponent,
    HomeComponent,
    VendorRegisterComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    VendorDashboardComponent,
    AddItemComponent,
    AdminHeaderComponent,
    ViewItemsComponent,
    UpdateItemComponent,
    ViewDealersComponent,
    UpdateDealersComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
    AdminRegisterCustomerComponent,
    AdminRegisterDealerComponent,
    CustomerHeaderComponent,
    CustomerProfileComponent,
    CustomerViewItemComponent,
    CustomerPurchaseItemComponent,
    VendorProfileComponent,
    VendorHeaderComponent,
    VendorAddItemComponent,
    VendorViewItemsComponent,
    VendorUpdateItemComponent,
    CustomerConfirmPageComponent,
    CustomerPurchaseHistoryComponent,
    CustomerViewPurchaseComponent,
    VendorViewSaleComponent,
    VendorSaleHistoryComponent,
    AdminSalesComponent,
    AdminPurchaseComponent,
    AdminViewSaleComponent,
    AdminViewPurchaseComponent,
    ForgotCustomerComponent,
    ForgotVendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
