import { FormGroup } from '@angular/forms';
import { ControlConfig } from './control-config';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-control',
  template: `
  <div class="form-group" [formGroup]="group">

  <label>{{ control.label }}</label>

  <input [type]="control.type"
         [formControlName]="control.controlName"
         class="form-control"
         [placeholder]="control.placeholder">
  </div>
  `,
})
export class DynamicControlComponent {

  public group: FormGroup;
  public control: ControlConfig;

}
