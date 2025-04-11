import { bankFeature5 } from '@ease-lite/bank-feature-5';
import { loanFeature6 } from '@ease-lite/loan-feature-6';

export function cardFeature14(): string {
  return `card-feature-14 integrating with ${bankFeature5()} and ${loanFeature6()}`;
}
