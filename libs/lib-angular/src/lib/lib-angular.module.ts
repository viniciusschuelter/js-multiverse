import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponentComponent } from './angular-component/angular-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AngularComponentComponent],
  exports: [AngularComponentComponent]
})
export class LibAngularModule {}
