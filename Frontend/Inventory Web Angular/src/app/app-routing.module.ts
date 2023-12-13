import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './Components/dashboard/add-item/add-item.component';
import { AdminDashboardComponent } from './Components/dashboard/admin-dashboard/admin-dashboard.component';
import { AdminPurchaseComponent } from './Components/dashboard/admin-dashboard/admin-purchase/admin-purchase.component';
import { AdminRegisterCustomerComponent } from './Components/dashboard/admin-dashboard/admin-register-customer/admin-register-customer.component';
import { AdminRegisterDealerComponent } from './Components/dashboard/admin-dashboard/admin-register-dealer/admin-register-dealer.component';
import { AdminSalesComponent } from './Components/dashboard/admin-dashboard/admin-sales/admin-sales.component';
import { AdminViewPurchaseComponent } from './Components/dashboard/admin-dashboard/admin-view-purchase/admin-view-purchase.component';
import { AdminViewSaleComponent } from './Components/dashboard/admin-dashboard/admin-view-sale/admin-view-sale.component';
import { UpdateCustomerComponent } from './Components/dashboard/admin-dashboard/update-customer/update-customer.component';
import { UpdateDealersComponent } from './Components/dashboard/admin-dashboard/update-dealers/update-dealers.component';
import { UpdateItemComponent } from './Components/dashboard/admin-dashboard/update-item/update-item.component';
import { ViewCustomerComponent } from './Components/dashboard/admin-dashboard/view-customer/view-customer.component';
import { ViewDealersComponent } from './Components/dashboard/admin-dashboard/view-dealers/view-dealers.component';
import { ViewItemsComponent } from './Components/dashboard/admin-dashboard/view-items/view-items.component';
import { CustomerConfirmPageComponent } from './Components/dashboard/customer-dashboard/customer-confirm-page/customer-confirm-page.component';
import { CustomerDashboardComponent } from './Components/dashboard/customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './Components/dashboard/customer-dashboard/customer-profile/customer-profile.component';
import { CustomerPurchaseHistoryComponent } from './Components/dashboard/customer-dashboard/customer-purchase-history/customer-purchase-history.component';
import { CustomerPurchaseItemComponent } from './Components/dashboard/customer-dashboard/customer-purchase-item/customer-purchase-item.component';
import { CustomerViewItemComponent } from './Components/dashboard/customer-dashboard/customer-view-item/customer-view-item.component';
import { CustomerViewPurchaseComponent } from './Components/dashboard/customer-dashboard/customer-view-purchase/customer-view-purchase.component';
import { VendorAddItemComponent } from './Components/dashboard/vendor-dashboard/vendor-add-item/vendor-add-item.component';
import { VendorDashboardComponent } from './Components/dashboard/vendor-dashboard/vendor-dashboard.component';
import { VendorProfileComponent } from './Components/dashboard/vendor-dashboard/vendor-profile/vendor-profile.component';
import { VendorSaleHistoryComponent } from './Components/dashboard/vendor-dashboard/vendor-sale-history/vendor-sale-history.component';
import { VendorUpdateItemComponent } from './Components/dashboard/vendor-dashboard/vendor-update-item/vendor-update-item.component';
import { VendorViewItemsComponent } from './Components/dashboard/vendor-dashboard/vendor-view-items/vendor-view-items.component';
import { VendorViewSaleComponent } from './Components/dashboard/vendor-dashboard/vendor-view-sale/vendor-view-sale.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminLoginComponent } from './Components/login/admin-login/admin-login.component';
import { CheckLoginComponent } from './Components/login/check-login/check-login.component';
import { CustomerLoginComponent } from './Components/login/customer-login/customer-login.component';
import { ForgotCustomerComponent } from './Components/login/forgot-customer/forgot-customer.component';
import { ForgotVendorComponent } from './Components/login/forgot-vendor/forgot-vendor.component';
import { SecondNavbarComponent } from './Components/login/second-navbar/second-navbar.component';
import { VendorLoginComponent } from './Components/login/vendor-login/vendor-login.component';
import { CustomerRegisterComponent } from './Components/register/customer-register/customer-register.component';
import { VendorRegisterComponent } from './Components/register/vendor-register/vendor-register.component';

const routes: Routes = [{path:'',component:HomeComponent},
  {path:'login',component:CheckLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'customer-login',component:CustomerLoginComponent},
  {path:'forgot-customer',component:ForgotCustomerComponent},
  {path:'dealer-login',component:VendorLoginComponent},
  {path:'forgot-vendor',component:ForgotVendorComponent},
  {path:'second-navbar',component:SecondNavbarComponent},
  {path:'register-customer',component:CustomerRegisterComponent},
  {path:'register-vendor',component:VendorRegisterComponent},
  {path:'vendor-dashboard/:vendorName/:vendorId',component:VendorDashboardComponent},
  {path:'customer-dashboard/:custName/:custId',component:CustomerDashboardComponent},
  {path:'admin-dashboard/:adminname',component:AdminDashboardComponent},
  {path:'add-item/:name',component:AddItemComponent},
  {path:'admin-view-item/:adminname',component:ViewItemsComponent},
  {path:'update-item/:itemId/:name',component:UpdateItemComponent},
  {path:'view-customer/:name',component:ViewCustomerComponent},
  {path:'update-customer/:customerId/:name',component:UpdateCustomerComponent},
  {path:'view-dealer/:name',component:ViewDealersComponent},
  {path:'update-dealer/:vendorId/:name',component:UpdateDealersComponent},
  {path:'admin-register-customer/:name',component:AdminRegisterCustomerComponent},
  {path:'admin-register-dealer/:name',component:AdminRegisterDealerComponent},
  {path:'admin-sales/:name',component:AdminSalesComponent},
  {path:'admin-view-sale/:name/:saleId',component:AdminViewSaleComponent},
  {path:'admin-purchase/:name',component:AdminPurchaseComponent},
  {path:'admin-view-purchase/:name/:purchaseId',component:AdminViewPurchaseComponent},
  {path:'customer-profile/:id',component:CustomerProfileComponent},
  {path:'customer-view-item/:custName/:custId',component:CustomerViewItemComponent},
  {path:'customer-confirm-item/:itemId/:custId/:vendorId',component:CustomerConfirmPageComponent},
  {path:'customer-purchase-item/:itemId/:custId/:vendorId/:quantity',component:CustomerPurchaseItemComponent},
  {path:'cuatomer-purchase-history/:custName/:custId',component:CustomerPurchaseHistoryComponent},
  {path:'customer-view-purchase/:custName/:custId/:purchaseId',component:CustomerViewPurchaseComponent},
  {path:'vendor-profile/:id',component:VendorProfileComponent},
  {path:'vendor-view-item/:vendorName/:vendorId',component:VendorViewItemsComponent},
  {path:'vendor-add-item/:vendorName/:vendorId',component:VendorAddItemComponent},
  {path:'vendor-update-item/:itemId/:vendorId/:vendorName',component:VendorUpdateItemComponent},
  {path:'vendor-sale-history/:vendorId/:vendorName',component:VendorSaleHistoryComponent},
  {path:'vendor-view-sale/:vendorId/:vendorName/:saleId',component:VendorViewSaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
