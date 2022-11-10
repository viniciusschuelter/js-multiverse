import { ComponentProps, createElement, ElementType } from 'react';
import { createRoot } from 'react-dom/client';
import {Directive, inject, Input, ElementRef} from "@angular/core";

@Directive({
  selector: '[angularReactPortal]'
})
export class AngularReactPortalDirective<Comp extends ElementType> {
  @Input() reactComponent!: Comp;
  @Input() props!: ComponentProps<Comp>;

  private root = createRoot(inject(ElementRef).nativeElement)

  ngOnChanges() {
    this.root.render(createElement(this.reactComponent, this.props))
  }

  ngOnDestroy() {
    this.root.unmount();
  }

}
