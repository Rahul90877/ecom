import { Component } from '@angular/core';
import { ServicecartService } from '../services/servicecart.service';
import { TestService } from '../Service/test.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent {
  display: string = "";
  isOperatorClicked: any;
  firstNumber: string = "";

  public products: any = [];
  public grandTotal !: number;
  constructor(private cartService: ServicecartService, private service: TestService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.products = this.products.map((i: any) => {
          return {
            productId: i.productId,
            imgUrl: i.imgUrl,
            ProductName: i.ProductName,
            Description: i.Description,
            categoryId: i.categoryId,
            price1: i.price1,
            quantity: 1,
            total: i.price1
          }
        })
        //this.grandTotal = this.cartService.getTotalPrice();
        this.grandTotal = this.products.reduce((a: any, b: any) => a + Number(b.total), 0);
      })
    // this.products = this.products.filter((f:any) => f.productId)
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);

  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  PlusQty(i: any) {
    // if (this.products[i].quantity == undefined) {
    //   this.products[i].quantity = 1
    // }

    
    this.products[i].quantity += 1;
    alert(this.products[i].price1)
    this.products[i].total = Number(this.products[i].quantity || 0) * Number(this.products[i].price1 || 0);
    this.grandTotal = this.products.reduce((a: any, b: any) => a + Number(b.total), 0)
  }
  MinusQty(i: any) {
    if (this.products[i].quantity == 0) {
      this.products[i].quantity = 1
    }
    this.products[i].quantity -= 1;
    this.products[i].total = Number(this.products[i].quantity || 0) * Number(this.products[i].price || 0);
    this.grandTotal = this.products.reduce((a: any, b: any) => a + Number(b.total), 0)
  }


  ///////////////////////////////////////////////////////    checkout button    /////////////////////////////////////////////////////////


  checkout() {
    var list = [];
    //  alert(JSON.stringify(this.products))
    list = this.products.map((i: any) => {
      return {
        ProductId: i.productId,
        UnitPrice: i.price,
        quantity: i.quantity,
        Amount: i.total
      }
    })
    let input = {
      "orderId": 0,
      "userId": sessionStorage.getItem("userId"),
      "totalAmt": this.grandTotal,
      "createdBy": 1,
      "orderSub": list
    }
    this.service.createOrder(input).subscribe((data: any) => {
      if (data.success) {
        alert("Order Placed");
        //https://scontent.fcjb1-2.fna.fbcdn.net/v/t1.6435-9/121498355_2662353160647598_2439814634461678137_n.png?_nc_cat=110&ccb=1-7&_nc_sid=2c4854&_nc_ohc=HHolCyE3sr0AX9xc9Vx&_nc_ht=scontent.fcjb1-2.fna&oh=00_AfDggbNS3C0VC2RL9EWsNR7t3jgYkyIBe_3noWCo1bC2nw&oe=64AF6723
      }
      else {
        alert("Order not placed")
    
      }

    })
  }
}
