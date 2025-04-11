export * from './lib/card-auto-pay/card-auto-pay.component';

// Import generated card feature libraries
import { cardFeature1 } from '@ease-lite/card-feature-1';
import { cardFeature2 } from '@ease-lite/card-feature-2';
import { cardFeature3 } from '@ease-lite/card-feature-3';
import { cardFeature4 } from '@ease-lite/card-feature-4';
import { cardFeature5 } from '@ease-lite/card-feature-5';
import { cardFeature6 } from '@ease-lite/card-feature-6';
import { cardFeature7 } from '@ease-lite/card-feature-7';

export function getCardAutopayFeatures(): string[] {
  return [
    cardFeature1(),
    cardFeature2(),
    cardFeature3(),
    cardFeature4(),
    cardFeature5(),
    cardFeature6(),
    cardFeature7(),
  ];
}
