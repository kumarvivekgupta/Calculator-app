import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.component.html',
  styleUrls: ['./single-button.component.css']
})
export class SingleButtonComponent implements OnInit {
  _placed: any;

  get placed(): any {
    return this._placed;
  }

  @Output() click: EventEmitter<any> = new EventEmitter();
  @Input('placed')
  set placed(value: any) {
    this._placed = value;
  }

  constructor() {

  }

  ngOnInit() {

  }

  clicked(event) {
    console.log(event);
    this.click.emit(this.placed);
  }
}
