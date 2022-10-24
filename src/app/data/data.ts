import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';

import { ICurrency } from 'src/app/models/currency';



export const dataServer = () => {

    class HeaderComponent implements OnInit{
        @Input() currency! : ICurrency
        dataHeader: any = []

        date: Date = new Date()

        constructor(private http: HttpClient) {
        }
        ngOnInit(): void {
      
          this.http.get("https://api.monobank.ua/bank/currency").subscribe((data) => {
              this.dataHeader = data
            })
        }
      }
}
console.log(dataServer);
