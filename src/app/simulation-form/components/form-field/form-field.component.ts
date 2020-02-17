import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit, OnChanges {

  @Output()
  changedField = new EventEmitter();
  @Input()
  required: boolean;
  @Input()
  typeParam: string;
  @Input()
  title: string;
  @Input()
  placeHolderParam: string;
  value: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changedField.emit({fieldValue: this.value});
    console.log('changed');
  }

  changedFieldValue(newValue) {
    this.value = newValue;
    this.changedField.emit({fieldValue: this.value});
    console.log('changed');
  }


}
