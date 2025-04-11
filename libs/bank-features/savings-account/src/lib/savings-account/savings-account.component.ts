import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaseSharedComponentsComponent } from '@ease-lite/ease-shared-components';

@Component({
  selector: 'lib-savings-account',
  imports: [CommonModule, EaseSharedComponentsComponent],
  templateUrl: './savings-account.component.html',
  styleUrl: './savings-account.component.css',
})
export class SavingsAccountComponent {}
