import { DynamicControlComponent } from './dynamic-control.component';
import { ControlConfig } from './control-config';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

@Component({
  selector: 'app-form-engine',
  template: `
  <form [formGroup]="group" (ngSubmit)="submit()">

      <ng-container #entry></ng-container>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
  styles: []
})
export class FormEngineComponent implements OnInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  public group: FormGroup;
  private cfr: ComponentFactoryResolver;

  @Input()
  public controls: ControlConfig[];

  constructor(cfr: ComponentFactoryResolver) {
      this.cfr = cfr;
  }

  public ngOnInit(): void {
    this.group = new FormGroup({});
    this.createForm();
  }

  private createForm() {
    const controlFactory = this.cfr.resolveComponentFactory(DynamicControlComponent);

    // loop over an array of form conifguration objects
    this.controls.forEach( controlConfig => {

      // for each config object, add a form control to my form group (login form)
      this.group.addControl(controlConfig.controlName, new FormControl());

      // create an instance of the dynamic control component
      const controlComponent = this.entry.createComponent(controlFactory);

      // init the group and control properties on the dynamic control instance
      controlComponent.instance.group = this.group;
      controlComponent.instance.control = controlConfig;
    });
  }

  public submit() {
    console.log(this.group.value);
  }

}
