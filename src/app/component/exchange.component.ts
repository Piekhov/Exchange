import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})

export class ExchangeComponent implements OnInit {

  data: any = []
  newData: any = []
  result: any = 0
  base = '980'
  base2 = '980'
  count = 0
  result1: any = 0;
  dataBaseCurr: any = []

  changebase(a: string) {
    this.base = a
  }
  changebase2(b: string) {
    this.base2 = b
  }

  inputHandle(event: any) {
    let value = event.target.value
    this.count = value
    if (value >= 0) {
      let value = event.target.value
      this.count = value
    } else {
      alert("Будь ласка, введіть значення, яке більше за 0")
    }
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.monobank.ua/bank/currency").subscribe((data) => {
      this.data = data
      this.dataBaseCurr = [this.data[0], this.data[1]]

      console.log(this.dataBaseCurr);
      
      

      this.dataBaseCurr.forEach((element: any) => {
       
        if (this.dataBaseCurr.hasOwnProperty(element.currencyCodeA)) {
          this.dataBaseCurr[element.currencyCodeA][element.currencyCodeB] = element.rateBuy
        }
        else {
          this.dataBaseCurr[element.currencyCodeA] = {
            [element.currencyCodeB]: element.rateBuy
          }
        }

        if (this.dataBaseCurr.hasOwnProperty(element.currencyCodeB)) {
          this.dataBaseCurr[element.currencyCodeB][element.currencyCodeA] = String(1 / element.rateSell)
        } 
        else {
          this.dataBaseCurr[element.currencyCodeB] = {
            [element.currencyCodeA]: String(1 / element.rateSell)
          }
        }
      })
    })
  }

  doubleConvert (cur1: string, cur2: string, count: string): string {
    for (let i = 0; i < Object.keys(this.dataBaseCurr).length; i++) {
        const iterableCurr = this.dataBaseCurr[Object.keys(this.dataBaseCurr)[i]];
        if (iterableCurr.hasOwnProperty(cur1) && iterableCurr.hasOwnProperty(cur2)) {
          const firstConvert =  +count * +this.dataBaseCurr[cur1][Object.keys(this.dataBaseCurr)[i]];
          return this.result = ((firstConvert * +iterableCurr[cur2]).toFixed(2));
        }
    }
    return this.result = 'error while converting';
}
  convert() {
    if (this.base === this.base2) return this.result = this.count;
    if (
      !this.dataBaseCurr.hasOwnProperty(this.base) ||
      !this.dataBaseCurr[this.base].hasOwnProperty(this.base2)
    )
    return this.doubleConvert(this.base, this.base2, String(this.count));
    this.result = (this.count * this.dataBaseCurr[this.base][this.base2]).toFixed(2);
    return this.result;
  }
}


