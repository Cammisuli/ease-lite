import { bankFeature11 } from '@ease-lite/bank-feature-11';
import { loanFeature11 } from '@ease-lite/loan-feature-11';

export function cardFeature11(): string {
  return `card-feature-11 integrating with ${bankFeature11()} and ${loanFeature11()}`;
}
