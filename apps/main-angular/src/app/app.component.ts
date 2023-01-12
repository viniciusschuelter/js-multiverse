import { Component } from '@angular/core';
import { LibReact } from "@lib/react";
import { LibSvelte } from "@lib/svelte";

@Component({
  selector: 'js-multiverse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main-angular';
  compReact = LibReact;
  compSvelte = LibSvelte;
}
