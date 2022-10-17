import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

    private loadingSubject = new BehaviorSubject<any>(null);
    public isLoading$: Observable<boolean> = this.loadingSubject.asObservable();

    show() {
        this.loadingSubject.next(true);
    }
    
    hide() {
        setTimeout( () => {     
            this.loadingSubject.next(false);
           }, 2000 );
    }
    
}