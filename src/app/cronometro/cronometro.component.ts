import { Component } from '@angular/core';
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

  constructor(private cronometroService: CronometroService) { }

  start() {
    if (this.running) return;
    this.running = true;
    this.sub = this.cronometroService.getCronometro()
      .subscribe(n => this.counter = n);
  }

  restart() {
    this.running = false;
    this.sub?.unsubscribe();
    this.counter = 0;
  }
}