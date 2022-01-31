import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { TimeoutInfo } from 'rxjs/internal/operators/timeout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = '';
  mi = -1;
  entredText: string = '';
  mistakeIndex: number = -1;
  lastIndex = -1;
  charArray: number[] = [];
  minutesCounter: number = 0;
  timer: any;
  constructor() {
    this.restart();
  }
  detectChange(event: Event): void {
    console.clear();
    this.entredText = (event.target as HTMLInputElement).value;
    let len = this.entredText.length;

    if (this.lastIndex >= len - 1) {
      this.charArray[this.lastIndex] = 0;
      if (this.mi > 0 && this.lastIndex === this.mi) this.mi = -1;
      this.lastIndex--;
      return;
    }
    this.lastIndex++;

    let firstEval = this.entredText[len - 1] === this.text.charAt(len - 1);
    let secondEval = this.mi === -1 || len - 1 === this.mi;

    let state = firstEval && secondEval ? 1 : -1;

    if (state === -1 && this.mi === -1) this.mi = len - 1;
    else if (state === 1) this.mi = -1;

    this.charArray[len - 1] = state;
    // }

    // else
  }
  generateRandom(): string {
    return (Math.random() * 32).toString(36).substring(1, 11);
  }

  onInput(event: Event): void {
    console.clear();
    this.entredText = (event.target as HTMLInputElement).value;
    if (this.entredText.length > this.text.length) return;
    let index = this.entredText.length - 1;
    let res = this.compare(this.text[index], this.entredText[index], index);
    if (this.mistakeIndex === -1 && res === -1) {
      this.mistakeIndex = index;
    } else if (this.mistakeIndex === index && res === 1)
      this.mistakeIndex = index;
    this.charArray[index] = res;
    console.log(this.charArray);
  }
  compare(randomLetter: String, entredLetter: String, index: number): number {
    console.log('index', index);
    console.log('mistake', this.mistakeIndex);

    for (let i = index + 1; i < this.charArray.length; i++) {
      this.charArray[i] = 0;
    }
    return randomLetter === entredLetter ? 1 : -1;
  }

  restart(): void {
    this.text = this.generateRandom();
    this.charArray = Array(10).fill(0);
    this.mi = -1;
    this.lastIndex = -1;
    this.minutesCounter = 0;
    this.clearTimer();

    // set
  }
  clearTimer(): void {
    if (this.timer) clearTimeout(this.timer);
  }
  setTimer(): any {
    this.timer = setTimeout(() => {
      this.minutesCounter++;
      console.log(this.minutesCounter);

      this.setTimer();
    }, 1000);
  }
  start(): void {
    this.clearTimer();
    this.restart();
    this.setTimer();
  }
  getMinutesCount(): number {
    // let temp = this.minutesCounter;
    this.clearTimer();
    // this.minutesCounter = temp;
    return this.minutesCounter;
  }
}
