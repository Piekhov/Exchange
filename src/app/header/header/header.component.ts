import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { ICurrency } from 'src/app/models/currency';
import { CurrencyServise } from 'src/app/servises/currency.service';
import { ExchangeComponent } from '../../component/exchange.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() currency! : ICurrency
  dataHeader: any = []
  
  
  
  date: Date = new Date()
  
  
  
  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {

    this.http.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").subscribe((data) => {
        this.dataHeader = data
        console.log(this.dataHeader);
        
      })
      
  }
  
}


