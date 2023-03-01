import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() isSubmitted = false;
  @Input() multiRows = false;

  errorMessages: Record<string, string> = {
    required:
      'It seems like you didn’t fill in the field. Please, enter a value to continue',
    email:
      'It seems like you entered the wrong value. Please, enter a valid value to continue',
    pattern: 'It seems like you entered the wrong value. Use only the letters',
    minLength:
      'You entered a value that is too short. Try entering more characters',
    maxLength:
      'You entered a value that is too long. Try entering fewer characters',
  };

  constructor() {}

  ngOnInit(): void {}
}
