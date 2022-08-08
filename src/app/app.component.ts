import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from './data/data';
import { ICurrency } from './models/currency';
import { CurrencyServise } from './servises/currency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // currency: ICurrency[] = []

  loading = true
  // constructor(private currencyService: CurrencyServise) {}
  // ngOnInit(): void {
    // this.currencyService.getAll(this.ccy).subscribe(currency => {
      
    //   this.currency = currency
    //   this.curr = JSON.stringify(this.currency)
    //   console.log(this.currency)
    //   this.currency = JSON.parse(this.currency)
      
     
    // })
  // }
  currency1: any = []
  datanew: any = ''
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5' + this.currency1).subscribe((datanew: any) => {
    this.datanew = datanew
    console.log(this.datanew)
  })
  }
  
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLDO-49vWrDATXF9s9SfSOQ6YETUVnf2eYQ&usqp=CAU'
}
