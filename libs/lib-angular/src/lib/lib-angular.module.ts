import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponentComponent } from './angular-component/angular-component.component';
import {AngularReactPortalDirective} from "./angular-react-portal/angular-react-portal.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [AngularComponentComponent, AngularReactPortalDirective],
  exports: [AngularComponentComponent, AngularReactPortalDirective]
})
export class LibAngularModule {}
