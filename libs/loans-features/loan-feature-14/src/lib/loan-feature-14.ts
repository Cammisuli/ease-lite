import { bankFeature14 } from '@ease-lite/bank-feature-14';
import { cardFeature14 } from '@ease-lite/card-feature-14';

export function loanFeature14(): string {
  return `loan-feature-14 integrating with ${bankFeature14()} and ${cardFeature14()}`;
}
