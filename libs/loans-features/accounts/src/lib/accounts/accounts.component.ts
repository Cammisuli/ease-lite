import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaseSharedComponentsComponent } from '@ease-lite/ease-shared-components';

@Component({
  selector: 'lib-accounts',
  imports: [CommonModule, EaseSharedComponentsComponent],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent {}
