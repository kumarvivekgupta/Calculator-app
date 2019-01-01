import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  form: FormGroup;
  var: string = '';
  result: string = '';
  index: number;
  result1: number;
  result2: number;


  ngOnInit() {
    this.form = new FormGroup({
      display: new FormControl('')
    });
  }

  clicked(value) {
    this.var = this.var.concat(value);
    this.result = this.result.concat(value);
    if (value === '=') {
      this.calculate();
    }
  }

  calculate() {
    for (const i of this.var) {
      if ((i === '+') || (i === '-') || (i === '*') || (i === '/')) {
        this.index = this.var.indexOf(i);
      }
    }

    switch (this.var[this.index]) {
      case '+':
        this.result1 = +this.var.slice(0, this.index);
        this.result2 = +this.var.slice((this.index + 1), this.var.length - 1);
        this.result = (this.result1 + this.result2).toString();
        console.log(this.result);
        break;

      case '-':
        this.result1 = +this.var.slice(0, this.index);
        this.result2 = +this.var.slice((this.index + 1), this.var.length - 1);
        this.result = (this.result1 - this.result2).toString();
        console.log(this.result);
        break;

      case '*':
        this.result1 = +this.var.slice(0, this.index);
        this.result2 = +this.var.slice((this.index + 1), this.var.length - 1);
        this.result = (this.result1 * this.result2).toString();
        console.log(this.result);
        break;

      case '/':
        this.result1 = +this.var.slice(0, this.index);
        this.result2 = +this.var.slice((this.index + 1), this.var.length - 1);
        this.result = (this.result1 / this.result2).toString();
        console.log(this.result);
        break;

    }
  }
  clear(){
    this.result='';
  }
}
