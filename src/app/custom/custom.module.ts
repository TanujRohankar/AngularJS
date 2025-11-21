import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProductHighlightDirective } from './directives/app-product-highlight.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, AppProductHighlightDirective
  ],
  exports:[AppProductHighlightDirective]
})
export class CustomModule { }
