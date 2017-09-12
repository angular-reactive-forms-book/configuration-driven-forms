import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="display-1">Welcome to Dynamic Forms!</h1>

    <app-form-engine [controls]="controls"></app-form-engine>
  `,
  styles: []
})
export class AppComponent {

  public controls =  [
    { label: 'User Name', type: 'text', placeholder: 'enter your username', controlName: 'username' },
    { label: 'Email', type: 'text', placeholder: 'enter your email', controlName: 'email' },
    { label: 'Password', type: 'password', placeholder: 'enter your password', controlName: 'pasword' },
  ];
}
