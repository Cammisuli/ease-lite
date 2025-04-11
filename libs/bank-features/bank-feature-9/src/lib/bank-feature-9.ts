import { cardFeature1 } from '@ease-lite/card-feature-1';
import { cardFeature3 } from '@ease-lite/card-feature-3';
import { cardFeature5 } from '@ease-lite/card-feature-5';

export function bankFeature9(): string {
  return `bank-feature-9 integrating with ${cardFeature1()}, ${cardFeature3()}, and ${cardFeature5()}`;
}
