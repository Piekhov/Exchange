import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { delay, Observable, } from "rxjs";
import { ICurrency } from "../models/currency";

@Injectable ({
    providedIn: 'root'
})


export class CurrencyServise {
    constructor(private http: HttpClient) {
    }

    // getAll(count: string) {
    //     let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    //     return this.http.get(url);
    // }
    getAll(): Observable <ICurrency[]> {
       return this.http.get<ICurrency[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    }
    // getAll(): Observable <ICurrency[]> {
    //     let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    //     return this.http.get<ICurrency>(url);
    // }
}