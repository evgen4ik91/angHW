import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageFormComponent } from './edit-page-form/edit-page-form.component';

@NgModule({
  declarations: [EditPageFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EditPageFormComponent
  ]
})
export class EditPageModule { }
