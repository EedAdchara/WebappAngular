import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.scss'],
})
export class PrimeNumberComponent {
  myValue?: number = 0;
  calculateChoice: 'isPrime' | 'isFibonacci' = 'isPrime';

  isPrime(value?: number): boolean {
    if (value === undefined) {
      return false;
    }
    for (let i = 2; i * i <= value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1;
  }

  isFibonacci = (value?: number) => {
    if (value === undefined) {
      return false;
    }
    if (value === 0 || value === 1) {
      return true;
    }
    let prev = 1;
    let count = 2;
    let temp = 0;
    while (count <= value) {
      if (prev + count === value) {
        return true;
      }
      temp = prev;
      prev = count;
      count += temp;
    }
    return false;
  };
}
