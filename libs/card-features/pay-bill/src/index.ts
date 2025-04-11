export * from './lib/card-pay-bill/card-pay-bill.component';

// Import generated card feature libraries
import { cardFeature8 } from '@ease-lite/card-feature-8';
import { cardFeature9 } from '@ease-lite/card-feature-9';
import { cardFeature10 } from '@ease-lite/card-feature-10';
import { cardFeature11 } from '@ease-lite/card-feature-11';
import { cardFeature12 } from '@ease-lite/card-feature-12';
import { cardFeature13 } from '@ease-lite/card-feature-13';
import { cardFeature14 } from '@ease-lite/card-feature-14';
import { cardFeature15 } from '@ease-lite/card-feature-15';

export function getCardPayBillFeatures(): string[] {
  return [
    cardFeature8(),
    cardFeature9(),
    cardFeature10(),
    cardFeature11(),
    cardFeature12(),
    cardFeature13(),
    cardFeature14(),
    cardFeature15(),
  ];
}
