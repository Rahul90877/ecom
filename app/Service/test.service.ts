import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  a: any = ""

  prodList = [{ "ProductId": 1, "categoryId": 1, "ProductName": "Veirdo Oversized", "price1": " 399", "mrp": "M.R.P:1199(67% off)", "Description": "Loose Fit | Relaxed Fit | Wide Fit | 100% Cotton Paisley Printed Half Sleeves Navy Blue Colour T-Shirt", "imgUrl": "https://render.fineartamerica.com/images/rendered/square-product/small/images/rendered/default/t-shirt/33/30/images/artworkimages/medium/1/illustration-of-airbus-a350-test-aircraft-steve-h-clark-photography-transparent.png?targetx=-1&targety=-1&imagewidth=440&imageheight=290&modelwidth=440&modelheight=590", "Rating": "3.5" },
  { "ProductId": 2, "categoryId": 1, "ProductName": "NB NICKY BOY", "price1": " 1500", "mrp": "M.R.P:3000(50% off)", "Description": "Veirdo® 100% Cotton Oversize Drop Shoulder Loose Fit Round Neck Printed T-Shirt for Men/Boys", "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqnILKoUCDbNBEPeMv8XXbxSH3qyoW4odCA&usqp=CAU", "Rating": "3.0" },
  { "ProductId": 3, "categoryId": 1, "ProductName": "Louis Philippe Sport", "price1": " 1196", "mrp": "M.R.P:1,997(71% off)", "Description": "Men Solid Polo Neck Pure Cotton Grey T-Shirt.  Shirt for Men/Boys  Product Dimensions 25 x 20 x 2 cm;", "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtz0hgOO6u_wb4j-sTuP0Db5z0FQU1-HkVUZveq1jD8Q&usqp=CAU&ec=48600113", "Rating": "2.5" },
  { "ProductId": 4, "categoryId": 1, "ProductName": "DENIMHOLIC Cotton Sleeve", "price1": " 899", "mrp": "M.R.P:1199(67% off)", "Description": "Printed Oversized t Shirts for Women, Loose t Shirts for Women, Baggy t Shirt for Women,", "imgUrl": "https://www.oikotaantees.in/wp-content/uploads/2022/09/Evil-Goddess-print-Black-T-shirt-product-image-in-white-background-.png", "Rating": "3.0" },
  
  
{ "ProductId": 5, "categoryId": 1, "ProductName": "Tfortees Men T-Shirt", "price1": " 199", "mrp": "M.R.P:400(50% off)", "Description": "Men Solid Polo Neck Pure Cotton blue T-Shirt. Shirt for Men/Boys Product Dimensions 25 x 20 x 2 cm;,", "imgUrl": "https://m.media-amazon.com/images/I/41uOL4Ig2ML._UL1002_.jpg", "Rating": "1.5" },
  { "ProductId": 6, "categoryId": 1, "ProductName": "DUDEME", "price1": " 949", "mrp": "M.R.P : 2,000(53% off)", "Description": "Naruto Akatsuki | Unisex Printed Anime Hoodies | 100% Cotton Anime Hoodies | 350 GSM Double Bio", "imgUrl": "https://m.media-amazon.com/images/I/61j8iInsZhL._UL1080_.jpg" , "Rating": "4.5"},
  { "ProductId": 7, "categoryId": 1, "ProductName": "BLIVE", "price1": " 349", "mrp": "M.R.P : 1999(83% off)", "Description": "Men's Round Neck Full Sleeve T-Shirt | Printed White T-Shirt | 100% Cotton Anime Chakra Production", "imgUrl": "https://m.media-amazon.com/images/I/61N4pAuotBL._UL1200_.jpg", "Rating": "4.5" },
  { "ProductId": 8, "categoryId": 1, "ProductName": " Generic", "price1": " 294", "mrp": "M.R.P : 499(41% off)", "Description": "Casual Round Neck Printed Crop Top for Women Stylish Look with Half Sleeves for Office Wear, Cotton Lycra Crop Top", "imgUrl": "https://m.media-amazon.com/images/I/21mKwuqSt5L.jpg", "Rating": "4.5" }]

  prodList1 = [{ "ProductId": 9, "categoryId": 2, "ProductName": "Sparx mens Sneaker", "price1": "2499", "mrp1": "M.R.P:2,799(11% off)", "Description": "Sole: Ethylene Vinyl Acetate Closure: Lace-Up Fit Type: Regular Shoe Width: Medium shoe", "imgUrl": "https://m.media-amazon.com/images/I/71eIpmDUAQL._AC_UL400_.jpg" , "Rating": "3.5"},
  { "ProductId": 10, "categoryId": 2, "ProductName": "Red Tape Sneaker Casual", "price1": " 1517", "mrp1": "M.R.P : 6899(78% off)", "Description": "Men | Soft Cushioned Insole, Slip-Resistance, Dynamic Feet Support, Arch Support & Shock", "imgUrl": "https://m.media-amazon.com/images/I/71FgXlqWWiL._AC_UL400_.jpg", "Rating": "2.5" },
  { "ProductId": 11, "categoryId": 2, "ProductName": "Men Formal Shoes Shoes", "price1": "  669", "mrp1": "M.R.P:1699(61% off)", "Description": "Sole: Thermoplastic Elastomers Closure: Lace-Up Heel Height: 1 inches Fit Type: Regular", "imgUrl": "https://m.media-amazon.com/images/I/71eMcroT2IS._AC_UL400_.jpg" , "Rating": "2.5"},
  { "ProductId": 12, "categoryId": 2, "ProductName": " mens Sneaker", "price1": "  759", "mrp1": "M.R.P:949(20% off)", "Description": "Sole: Rubber Closure: Lace-Up Shoe Width: Medium Sparx best outdoor footwear Best & Comfortable fit", "imgUrl": "https://m.media-amazon.com/images/I/71R4kZ0+ItL._AC_UL400_.jpg", "Rating": "3.5" }
 ,{ "ProductId": 13, "categoryId": 2, "ProductName": "Bacca Bucci Men's Running Shoe", "price1": "  1,399", "mrp1": "M.R.P:2999(53 % off)", "Description": "Heels With High-Density Sponge Lining Thick, The Insole Is Constructed Using Polyurethane Foraminate Material", "imgUrl": "https://m.media-amazon.com/images/I/61dKCBfKtSL._UL1200_.jpg", "Rating": "4.5" },
  { "ProductId": 14, "categoryId": 2, "ProductName": " Sparx Men Running Shoes", "price1": "  979", "mrp1": "M.R.P:1249(22% off)", "Description": "Sole: Rubber,Closure: Lace-Up,Fit Type: Relaxed,Shoe Width: Medium,Material:MESH,Lifestyle:Casual,", "imgUrl": "https://m.media-amazon.com/images/I/81uMdMRLB-L._UL1500_.jpg" , "Rating": "4.5"},
  { "ProductId": 15, "categoryId": 2, "ProductName": "Vector X Ranger", "price1": "  869", "mrp1": "M.R.P:2499(65 % off)", "Description": "Badminton/Tennis Court Shoe for Men Padded ankle collar, Padded Footbed, Cushioned, Full lace fastening.", "imgUrl": "https://m.media-amazon.com/images/I/71Q0Bu0rHNL._UL1500_.jpg", "Rating": "4.5" },
  { "ProductId": 16, "categoryId": 2, "ProductName": "Puma Unisex-Adult Ferrari", "price1": "  3,999", "mrp1": "M.R.P:8000(50 % off)", "Description": "A3rocat Mid Sneaker Style Name:-Sneaker Shoe Width: Medium Brand Color:-Rosso Corsa-Black-White.", "imgUrl": "https://m.media-amazon.com/images/I/51YO+QSXNiL._UL1200_.jpg" , "Rating": "4.5"}]

  prodList2 = [{ "ProductId": 17, "categoryId": 3, "ProductName": "Axor X-cross", "price1": " 3600", "mrp1": "M.R.P:4000(10% off)", "Description": "Colour Black Neon Yellow Brand VEGA Vehicle Service Type Street Bike Item Weight 1350 Grams", "imgUrl": "https://m.media-amazon.com/images/I/61E8aZrkMVL._AC_UL400_.jpg", "Rating": "2.5" },
  { "ProductId": 18, "categoryId": 3, "ProductName": "SMK Helmets", "price1": "  4999", "mrp1": "M.R.P:5500(10% off)", "Description": "Stellar - Monster - Gloss Orange Yellow Red - Single Clear Visor Full Face Helmet monster design ", "imgUrl": "https://m.media-amazon.com/images/I/51Z+Kg5UxpL._AC_UL400_.jpg" , "Rating": "3.5"},
  { "ProductId": 19, "categoryId": 3, "ProductName": "SMK Helmets - Gullwing", "price1": "  5500", "mrp1": "M.R.P:6150(11% off)", "Description": "Unicolour - Gloss Black with shiner - Dual Visor Flip Up Helmet (GL200 - Medium - 570 MM)", "imgUrl": "https://m.media-amazon.com/images/I/51WmojnGykL._AC_UL400_.jpg", "Rating": "4.5" },
  { "ProductId": 20, "categoryId": 3, "ProductName": " Ignyte IGN-4 Trever ISI", "price1": "  4036", "mrp1": "M.R.P:4749(15% off)", "Description": "DOT Certified Double Visor Full Face Helmet Outer Anti-Fog Clear Visor and Inner Smoke Sun Shield", "imgUrl": "https://m.media-amazon.com/images/I/61BZZ8A0-tL._AC_UL400_.jpg" , "Rating": "4.5"}
  ,{ "ProductId": 21, "categoryId": 3, "ProductName": "Royal Enfield helmets", "price1": "  2,970", "mrp1": "M.R.P:3300(10% off)", "Description": "ISI Certified Full Face Helmet with clear Visor(Gloss White-Size: L) Material	Acrylonitrile Butadiene Styrene (ABS)", "imgUrl": "https://m.media-amazon.com/images/I/718Kj5Kq73L._SL1500_.jpg", "Rating": "4.5" },
{ "ProductId": 22, "categoryId": 3, "ProductName": "Axor Apex Venomous ", "price1": " 4,694", "mrp1": "M.R.P:4994(6% off)", "Description": "Face Dual Visor Helmet for Men and Women with Pinlock Fitted Outer Clear Visor and Inner Smoke Sun Visor )", "imgUrl": "https://m.media-amazon.com/images/I/61Upycd4L5L._SL1500_.jpg", "Rating": "4.5" },
{ "ProductId": 23, "categoryId": 3, "ProductName": "SMK Typhoon Motorhead ", "price1": " 2,999", "mrp1": "M.R.P:5,999(50% off)", "Description": "MA476 Full face Helmet for Bike with Balaclva Plus Key Chain(L)SMK Helmet Comes with industry-leading safety )", "imgUrl": "https://m.media-amazon.com/images/I/51zqqd4TRmL.jpg" , "Rating": "4.5"},
{ "ProductId": 24, "categoryId": 3, "ProductName": "Steelbird SA-5 Monster ISI", "price1": "4,419", "mrp1": "M.R.P:4819(10% off)", "Description": "DOT Certified Full Face Graphic Helmet with Outer Anti-Fog Clear Visor)Intermediate Oval; Closure", "imgUrl": "https://m.media-amazon.com/images/I/61Ocp3wCifL._SL1100_.jpg", "Rating": "4.5" }]


  prodList3 = [{ "ProductId": 25, "categoryId": 4, "ProductName": "Titan Octane", "price1": "  5196", "mrp1": "M.R.P:5815(11% off)", "Description": "Dial Color: Grey, Case Shape: Oval, Dial Glass material: Mineral Band Color: Silver, Band Material: Leather", "imgUrl": "https://m.media-amazon.com/images/I/81FlcnfyQ3L._AC_UL400_.jpg", "Rating": "4.5" },
  { "ProductId": 26, "categoryId": 4, "ProductName": "Fastrack New Limitless FS1", "price1": "  2495", "mrp1": "M.R.P:4495(44% off)", "Description": "Smart Watch Biggest 1.95 Horizon Curve Display|SingleSync BT Calling v5.3|Built-in Alexa", "imgUrl": "https://m.media-amazon.com/images/I/71KpoPUzJ2L._AC_UL400_.jpg" , "Rating": "2.5"},
  { "ProductId": 27, "categoryId": 4, "ProductName": "NIBOSI", "price1": "  2699", "mrp1": "M.R.P:4000(33% off)", "Description": "Men's Watches Analog Minimalist Black Dial Watches for Men Business Chronograph", "imgUrl": "https://m.media-amazon.com/images/I/614LBX+Pi2L._AC_UL400_.jpg", "Rating": "3.5" },
  { "ProductId": 28, "categoryId": 4, "ProductName": " Shocknshop Digital Sports", "price1": " 284", "mrp1": "M.R.P:1119(75% off)", "Description": "Multi Functional Black Dial Watch for Mens Boys -315RED Multi-Functions: Complete Calendar,", "imgUrl": "https://m.media-amazon.com/images/I/61fyBGuO18L._UL1024_.jpg", "Rating": "1.5" }
 ,{ "ProductId": 29, "categoryId": 4, "ProductName": "Trex", "price1": "389", "mrp1": "M.R.P:999(61% off)", "Description": "Sport Digital Square Dial Multifunction Working Like Alarm,Day&Date,LED Luminous,Stop Watch,", "imgUrl": "https://m.media-amazon.com/images/I/718PIF+zWNL._UL1500_.jpg" , "Rating": "4.5"},
  { "ProductId": 30, "categoryId": 4, "ProductName": "Casio", "price1": " 20,000", "mrp1": "M.R.P : 40000(50% off)", "Description": "Casio Edifice Chronograph Black Dial Men's Watch - EFR-557CD-1AVUDF(ED472)", "imgUrl": "https://m.media-amazon.com/images/I/61MiT-9pFhL._UL1100_.jpg", "Rating": "4.5" },
  { "ProductId": 31, "categoryId": 4, "ProductName": "boAt ", "price1": "  2,099", "mrp1": "M.R.P:6,990(70% off)", "Description": "boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes, 1.3 Screen, 170+ Watch Faces, Sleep Monitor.", "imgUrl": "https://m.media-amazon.com/images/I/61hVGtfIXGL._SL1500_.jpg", "Rating": "4.5" },
  { "ProductId": 32, "categoryId": 4, "ProductName": "Titan Octane", "price1": "  5196", "mrp1": "M.R.P:5815(11% off)", "Description": "Sole: Rubber Closure: Lace-Up Shoe Width: Medium Sparx best outdoor footwear Best & Comfortable fit", "imgUrl": "https://m.media-amazon.com/images/I/51eTUyUIU3S._UL1500_.jpg", "Rating": "4.5" }]





  constructor(private http: HttpClient) { }


  public getDetails() {

  }
  Getproducts() {
    this.http.get("http://92.205.109.210:8013/Product/GetProductsByProductId?productId=1")
     return this.prodList,this.prodList1,this.prodList2,this.prodList3
  }

  createOrder(input: any) {
    return this.http.post("http://92.205.109.210:8013/Order/InsertOrder", input);
  }

}
