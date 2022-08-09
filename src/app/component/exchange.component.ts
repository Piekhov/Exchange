import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { ICurrency } from '../models/currency';
import { CurrencyServise } from '../servises/currency.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})


export class ExchangeComponent {

  @Input() currency!: ICurrency

  currjson: any = ''
  data: any = ''
  result = 0
  base = 'UAH'
  base2 = 'UAH'
  
  count = 0
  changebase (a: string) {
    this.base = a
    
  }
  changebase2 (b: string) {
    this.base2 = b
    
  }
 
  inputHandle(event: any) {
    
        let value = event.target.value
        this.count = value
        if (value >= 0 ) {
          let value = event.target.value
        this.count = value
      } else {
        alert("Будь ласка, введіть значення, яке більше за 0")
      }
    

  }
  // constructor(private currencyService: CurrencyServise) {}
  // ngOnInit(): void {
  //   this.currencyService.getAll().subscribe(currency => {
  //     this.currency = currency
  //   })
  // }
  // constructor(private currencyService: CurrencyServise) {}
    constructor(private http: HttpClient) {}
    ngOnInit(): void {}
        // this.currencyService.getAll().subscribe(data => {
        //   this.currjson = JSON.stringify(data)
        //   this.currjson = JSON.parse(this.currjson)
        //   this.result = this.currjson
        //   console.log(this.result)
        // })
      convert() {
      this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe((data) => {
        this.data = data
        if (this.base == 'USD' && this.base2 == "UAH") {
          this.result = this.data[0].buy*this.count
        } 
        if (this.base == 'EUR' && this.base2 == "UAH") {
          this.result = this.data[1].buy*this.count
        }
        if (this.base == 'UAH' && this.base2 == "UAH") {
          this.result=this.count
        }
        if (this.base == 'UAH' && this.base2 == "USD") {
          this.result=Math.round(this.count/this.data[0].sale)
          
        }
        if (this.base == 'UAH' && this.base2 == "EUR") {
          this.result=Math.round(this.count/this.data[1].sale)
        }
        if (this.base == 'USD' && this.base2 == "EUR") {
          this.result=Math.round((this.count*this.data[0].buy)/this.data[1].sale)
          alert("При розрахунку USD/EUR відбувається подвійна конвертація: USD/UAH, UAH/EUR")
        }
        if (this.base == 'USD' && this.base2 == "USD") {
          this.result=this.count
        }
        if (this.base == 'EUR' && this.base2 == "USD") {
          this.result=Math.round((this.count*this.data[1].buy)/this.data[0].sale)
          alert("При розрахунку EUR/USD відбувається подвійна конвертація: EUR/UAH, UAH/USD")
        }
        if (this.base == 'EUR' && this.base2 == "EUR") {
          this.result=this.count
        }
      })
    }
  


  

}
