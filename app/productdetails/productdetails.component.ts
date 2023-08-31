import { Component } from '@angular/core';
import { TestService } from '../Service/test.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
  prodList: any = [];



  constructor(private service: TestService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    let proId = Number(this.router.snapshot.queryParams['prodId']);
    let catId = Number(this.router.snapshot.queryParams['catId']);
    let prodList2 = Number(this.router.snapshot.queryParams['prodId']);

    
    if (catId == 1) 
    {this.prodList = this.service.prodList.filter((x: any) => x.ProductId == proId , prodList2);}
    

    else if (catId == 2) {
      this.prodList = this.service.prodList1.filter((x: any) => x.ProductId == proId , prodList2);
    }

    else if (catId == 3){
      this.prodList = this.service.prodList2.filter((x: any) => x.ProductId == proId , prodList2);}

    else if (catId == 4){
      this.prodList = this.service.prodList3.filter((x: any) => x.ProductId == proId , prodList2);}
  }

  

}
