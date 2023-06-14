import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ''; // falsy -> false, null, undefined, NaN, 0, ''
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  // onChangeLength(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   const parsedValue = parseInt(target.value)
  //   /*
  //   use of parseInt(value) vs Number(value)
  //   parseInt(32xyz) = 32
  //   Number(32xyz) = NAN
  //   */
  //   // const parsedValue = typeof Number(value) === 'number' ? Number(value) : 0;
  //   if (!isNaN(parsedValue))
  //     this.length = parsedValue;
  // }

  onChangeLengthHOLD(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  // onChangeLength(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   const parsedValue = parseInt(target.value);
  //   if (!isNaN(parsedValue)) this.length = parsedValue;
  // }

  onChangeLength(event: Event): void {
    const target = event.target as HTMLInputElement;
    // target.value is always STRING. Cast to int for length
    // recall parseInt(22px) = 22 but Number(22px) = NaN;
    const myLength = parseInt(target.value);
    this.length = !isNaN(myLength) ? myLength : 0;
  }

  onButtonClick() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let tempPW = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      // tempPW += validChars.charAt(index);
      tempPW += validChars[index];
    }
    this.password = tempPW;
    // console.log(tempPW);
    // console.log(validChars);
    // console.log(`
    // You entered:
    // Letters: ${this.includeLetters}
    // Numbers: ${this.includeNumbers}
    // Symbols: ${this.includeSymbols}
    // Length: ${this.length}
    // `);
  }

}

/*
Type of data binding
- event binding (click)="doSomething()"
- property binding [readonly]="somevalue"
- interpolation {{ somevalue }}
*/