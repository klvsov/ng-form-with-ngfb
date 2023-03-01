import { TooltipModule } from './components/tooltip/tooltip.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { FbComponent } from './fb.component';

@NgModule({
  declarations: [
    FbComponent,
    TooltipComponent,
    InputComponent,
    ButtonComponent,
    FormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, TooltipModule],
  exports: [FbComponent],
})
export class FbModule {}
