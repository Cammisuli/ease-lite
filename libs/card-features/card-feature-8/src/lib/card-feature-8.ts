import { bankFeature3 } from '@ease-lite/bank-feature-3';
import { loanFeature8 } from '@ease-lite/loan-feature-8';

export function cardFeature8(): string {
  return `card-feature-8 integrating with ${bankFeature3()} and ${loanFeature8()}`;
}
