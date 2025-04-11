import { cardFeature3 } from '@ease-lite/card-feature-3';
import { loanFeature11 } from '@ease-lite/loan-feature-11';

export function bankFeature11(): string {
  return `bank-feature-11 integrating with ${cardFeature3()} and ${loanFeature11()}`;
}
