import { IBeverage } from '../interfaces/iBeverage';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class BeverageService {

    private url: string = "../../assets/beverages.json";

    constructor(private http: HttpClient) {

    }

    getBeveragesFromHTTP(): Observable<IBeverage[]> {
        return this.http.get<IBeverage[]>(this.url);
    }


}