import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public digit1 = '';
  public digit2 = '';
  public digit3 = '';
  public digit4 = '';

  public answer1 = '6';
  public answer2 = '5';
  public answer3 = '4';
  public answer4 = '3';

  public input;
  public hints = [false, false, false, false];

  public showHint(number) {
    for (let i = 0; i < this.hints.length; i++) {
     this.hints[i] = false;
    }
    this.hints[number] = true;
  }

  public allCorrect() {
    if (
      this.digit1 === this.answer1 &&
      this.digit2 === this.answer2 &&
      this.digit3 === this.answer3 &&
      this.digit4 === this.answer4
    ) {
      for (let i = 0; i < this.hints.length; i++) {
        this.hints[i] = false;
      }
      return true;
    } else {
      return false;
    }
  }
}
