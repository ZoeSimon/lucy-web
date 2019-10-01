import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormMode } from 'src/app/models';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  // Field header
  @Input() header = '';
  @Input() set value(checked: boolean) {
    this._checked = checked;
    this.emit();
  }
  
  // Optional Input
  @Input() editable = true;

  ///// Form Mode
  private _mode: FormMode = FormMode.View;
  // Get
  get mode(): FormMode {
    return this._mode;
  }
  // Set
  @Input() set mode(mode: FormMode) {
    this._mode = mode;
  }
  ////////////////////

  get readonly(): boolean {
    if (this.mode === FormMode.View) {
      return true;
    } else {
      return !this.editable;
    }
  }

  private _checked = false;
  get checked(): boolean {
    return this._checked;
  }
  set checked(checked: boolean) {
    this._checked = checked;
    this.emit();
  }
  
  get fieldId(): string {
    return this.camelize(this.header);
  }

  // Output
  @Output() selectionChanged = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  private emit() {
    this.selectionChanged.emit(this.checked);
  }

  camelize(str: string): string {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }


}
