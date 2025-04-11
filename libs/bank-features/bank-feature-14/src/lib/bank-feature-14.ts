import { cardFeature13 } from '@ease-lite/card-feature-13';
import { loanFeature14 } from '@ease-lite/loan-feature-14';

export function bankFeature14(): string {
  return `bank-feature-14 integrating with ${cardFeature13()} and ${loanFeature14()}`;
}
