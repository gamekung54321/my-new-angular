import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter();
  @Input() inputDisplay = true;
  constructor() {}

  ngOnInit(): void {}

  decrease() {
    console.log('decrease');
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.counterChange.emit(this.counter);
    }
  }
  increase() {
    console.log('increase');
    if (this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
