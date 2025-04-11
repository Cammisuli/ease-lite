import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSharedUtilsComponent } from '@ease-lite/card-shared-utils';
import { EaseSharedComponentsComponent } from '@ease-lite/ease-shared-components';

@Component({
  selector: 'lib-card-pay-bill',
  imports: [
    CommonModule,
    CardSharedUtilsComponent,
    EaseSharedComponentsComponent,
  ],
  templateUrl: './card-pay-bill.component.html',
  styleUrl: './card-pay-bill.component.css',
})
export class CardPayBillComponent {}
