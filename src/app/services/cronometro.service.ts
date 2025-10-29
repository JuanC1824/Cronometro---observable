import { Injectable } from '@angular/core';
import { Observable, interval, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CronometroService {

  constructor() { }

  getCronometro(): Observable<number> {
    return interval(1000).pipe(
      startWith(0),
      map(i => i)
    );
  }
}
