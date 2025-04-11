import { bankFeature15 } from '@ease-lite/bank-feature-15';
import { cardFeature15 } from '@ease-lite/card-feature-15';

export function loanFeature15(): string {
  return `loan-feature-15 integrating with ${bankFeature15()} and ${cardFeature15()}`;
}
