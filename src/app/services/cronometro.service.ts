import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CronometroService {

  constructor() { }

  getCronometro(): Observable<number> {
    return new Observable<number>(observer => {
      let i = 0;
      observer.next(i);
      const id = setInterval(() => {
        i++;
        observer.next(i);
      }, 1000);

      return () => clearInterval(id);
    });
  }
}