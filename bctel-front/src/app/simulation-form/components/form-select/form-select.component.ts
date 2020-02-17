import { Component, OnInit,   EventEmitter, Input, SimpleChange, Output } from '@angular/core';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  required: boolean;
  @Input()
  listItems: [];
  selectedItem: any;
  @Output() selectedItemEmitter =  new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  setList(list: []): void {
    this.listItems = list;
  }

  onItemSelected(item: any): void {
    this.selectedItem = item;
    this.selectedItemEmitter.emit({selectedItem: this.selectedItem});
    console.log('emitindo selectedItem:', this.selectedItem);
  }

  get childSelectedItem(): any {
    return this.selectedItem;
  }
}
