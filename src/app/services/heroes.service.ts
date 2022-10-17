import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { HeroModel } from '../models/hero.model';


@Injectable({ providedIn: 'root' })

export class HeroesService {

    private heroListSubject = new BehaviorSubject<any>(null);
    public heroList$: Observable<HeroModel[]> = this.heroListSubject.asObservable();
    
    constructor(private http: HttpClient) {}

    getHeros(): void {
        this.http.get<HeroModel[]>("../../assets/json/superheroes.json").pipe().subscribe(res => {                
            this.heroListSubject.next(res);
        });
    }

    heroOperation(newHeroList: HeroModel[]):void {       
        this.http.get<HeroModel[]>("../../assets/json/superheroes.json").pipe().subscribe(res => {                
            this.heroListSubject.next(newHeroList);
        });
    }

}