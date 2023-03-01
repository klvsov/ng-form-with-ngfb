import { Component, HostListener, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '../tooltip/tooltip.enums';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() getFormUrl: string | undefined;
  @Input() successCallback?: Function;

  isFormSubmitted = false;
  isLoading = false;

  formGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('[a-zA-Z" "]+'),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  onSubmit() {
    this.isFormSubmitted = true;

    const values = {
      name: this.formGroup.controls['name'].value,
      email: this.formGroup.controls['email'].value,
      message: this.formGroup.controls['message'].value,
    };

    if (this.formGroup.invalid) return;

    if (typeof this.successCallback === 'function') {
      this.successCallback();
      this.formGroup.reset();
      Object.keys(this.formGroup.controls).forEach((key) => {
        this.formGroup.get(key)?.setErrors(null);
      });
    } else {
      const formData = new FormData();

      // for (let value in values) {
      // formData.append(value, values[value]);
      // }

      values.name && formData.append('name', values.name);
      values.email && formData.append('email', values.email);
      values.message && formData.append('message', values.message);

      this.isLoading = true;
      fetch(this.getFormUrl as string, {
        method: 'post',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
        .then(() => {
          console.log('Success');
          this.formGroup.reset();
          Object.keys(this.formGroup.controls).forEach((key) => {
            this.formGroup.get(key)?.setErrors(null);
          });
        })
        .catch((err) => console.log({ err }))
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
  TooltipPosition: typeof TooltipPosition = TooltipPosition;
  x = 0;
  y = 0;
  coordinates = '';

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
    this.x = $event.clientX;
    this.y = $event.clientY;
    this.coordinates = `${this.x},${this.y}`;
  }
}
