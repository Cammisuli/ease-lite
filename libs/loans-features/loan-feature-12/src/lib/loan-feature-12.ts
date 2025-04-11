import { bankFeature12 } from '@ease-lite/bank-feature-12';
import { bankFeature15 } from '@ease-lite/bank-feature-15';
import { cardFeature9 } from '@ease-lite/card-feature-9';

export function loanFeature12(): string {
  return `loan-feature-12 integrating with ${bankFeature12()}, ${bankFeature15()} and ${cardFeature9()}`;
}
