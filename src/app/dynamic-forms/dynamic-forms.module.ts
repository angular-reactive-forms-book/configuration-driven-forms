import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEngineComponent } from './form-engine.component';
import { DynamicControlComponent } from './dynamic-control.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [FormEngineComponent, DynamicControlComponent],
  entryComponents: [DynamicControlComponent],
  exports: [FormEngineComponent]
})
export class DynamicFormsModule { }
