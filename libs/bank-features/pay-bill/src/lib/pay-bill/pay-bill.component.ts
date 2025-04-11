import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaseSharedComponentsComponent } from '@ease-lite/ease-shared-components';

@Component({
  selector: 'lib-pay-bill',
  imports: [CommonModule, EaseSharedComponentsComponent],
  templateUrl: './pay-bill.component.html',
  styleUrl: './pay-bill.component.css',
})
export class PayBillComponent {}
