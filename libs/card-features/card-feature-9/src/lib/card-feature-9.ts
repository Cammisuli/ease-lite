import { bankFeature3 } from '@ease-lite/bank-feature-3';
import { bankFeature7 } from '@ease-lite/bank-feature-7';

export function cardFeature9(): string {
  return `card-feature-9 integrating with ${bankFeature3()} and ${bankFeature7()}`;
}
