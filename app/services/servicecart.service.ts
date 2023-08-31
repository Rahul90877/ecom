import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicecartService {

  public cartItemList : any =[]
  public prodList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  // public productList:any=[];
  // public search :any=[];
  constructor() { }
  getProducts(){
    return this.prodList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    // alert(JSON.stringify(this.cartItemList))
    this.prodList.next(product);
  }
  addtoCart(product : any){

    // if( this.productList.some((s:any) => s.productId ==product.productId)){
    //   alert('kkkk')
    // }
    // if(this.cartItemList.some(((f:any) => f.productId == product.productId))){
    //  alert('This Item Already in Cart')
    //   return;
    // }
    alert(JSON.stringify('this item added to cart'))
    this.cartItemList.push(product);
    //alert(JSON.stringify(this.cartItemList));
    
    this.prodList.next(this.cartItemList);
    this.getTotalPrice();


    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(productId: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(productId === a.productId){
        this.cartItemList.splice(index,1);
      }
    })
    this.prodList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.prodList.next(this.cartItemList);
  }
}
