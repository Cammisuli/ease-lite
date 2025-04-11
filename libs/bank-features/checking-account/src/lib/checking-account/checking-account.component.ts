import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaseSharedComponentsComponent } from '@ease-lite/ease-shared-components';

@Component({
  selector: 'lib-checking-account',
  imports: [CommonModule, EaseSharedComponentsComponent],
  templateUrl: './checking-account.component.html',
  styleUrl: './checking-account.component.css',
})
export class CheckingAccountComponent {}
