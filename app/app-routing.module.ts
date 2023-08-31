import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewecoComponent } from './neweco/neweco.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'ho',component:HomeComponent},
  {path:'product',component:ProductsComponent},
  {path:'productdet',component:ProductdetailsComponent},
  {path:'cart',component:CartpageComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'',component:NewecoComponent},
  {path:'login',component:LoginpageComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
