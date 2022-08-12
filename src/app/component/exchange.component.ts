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
  base = 'UAH'
  base2 = 'UAH'
  count = 0
  result1: any = 0;

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
    this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe((data) => {
      this.data = data

      this.data.forEach((element: any) => {
        if (this.data.hasOwnProperty(element.ccy)) {
          this.data[element.ccy][element.base_ccy] = element.buy
        }
        else {
          this.data[element.ccy] = {
            [element.base_ccy]: element.buy
          }
        }

        if (this.data.hasOwnProperty(element.base_ccy)) {
          this.data[element.base_ccy][element.ccy] = String(1 / element.sale)
        } 
        else {
          this.data[element.base_ccy] = {
            [element.ccy]: String(1 / element.sale)
          }
        }
      })
    })
  }

  doubleConvert (cur1: string, cur2: string, count: string): string {
    for (let i = 0; i < Object.keys(this.data).length; i++) {
        const iterableCurr = this.data[Object.keys(this.data)[i]];
        if (iterableCurr.hasOwnProperty(cur1) && iterableCurr.hasOwnProperty(cur2)) {
          const firstConvert =  +count * +this.data[cur1][Object.keys(this.data)[i]];
          return this.result = ((firstConvert * +iterableCurr[cur2]).toFixed(2));
        }
    }
    return this.result = 'error while converting';
}
  convert() {
    if (this.base === this.base2) return this.result = this.count;
    if (
      !this.data.hasOwnProperty(this.base) ||
      !this.data[this.base].hasOwnProperty(this.base2)
    )
    return this.doubleConvert(this.base, this.base2, String(this.count));
    this.result = (this.count * this.data[this.base][this.base2]).toFixed(2);
    return this.result;
  }
}


