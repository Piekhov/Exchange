import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { ICurrency } from "../models/currency";

@Injectable ({
    providedIn: 'root'
})

export class CurrencyServise {
    constructor(private http: HttpClient) {
    }
    getAll(): Observable <ICurrency[]> {
        
       return this.http.get<ICurrency[]>('https://api.monobank.ua/bank/currency')
       
    }
}