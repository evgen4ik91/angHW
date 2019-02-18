import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageFormComponent } from './edit-page-form/edit-page-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditPageFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EditPageFormComponent
  ]
})
export class EditPageModule { }
