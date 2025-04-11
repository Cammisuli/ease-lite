import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaseSharedComponentsComponent } from '@ease-lite/ease-shared-components';

@Component({
  selector: 'lib-card-shared-utils',
  imports: [CommonModule, EaseSharedComponentsComponent],
  templateUrl: './card-shared-utils.component.html',
  styleUrl: './card-shared-utils.component.css',
})
export class CardSharedUtilsComponent {}
