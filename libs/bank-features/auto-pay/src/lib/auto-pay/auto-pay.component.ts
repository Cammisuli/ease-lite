import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsComponent } from '@ease-lite/bank-shared-utils';
import { EaseSharedComponentsComponent } from '@ease-lite/ease-shared-components';

@Component({
  selector: 'lib-auto-pay',
  imports: [CommonModule, UtilsComponent, EaseSharedComponentsComponent],
  styleUrl: './auto-pay.component.css',
})
export class AutoPayComponent {}
