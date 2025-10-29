import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CronometroService } from '../services/cronometro.service';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {

  counter = 0;
  sub!: Subscription;
  running = false;

  constructor(
    private cronometroService: CronometroService,
    private cdr: ChangeDetectorRef
  ) {}

  start() { 
    if (this.running) return;
    this.running = true;
    this.sub = this.cronometroService.getCronometro()
      .subscribe(n => {
        this.counter = n;
        this.cdr.detectChanges();
      });
  }

  restart() {
    this.running = false;
    this.sub?.unsubscribe();
    this.counter = 0;
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
  this.sub?.unsubscribe();
  console.log('Cronómetro detenido');
  }
}