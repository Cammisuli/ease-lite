import { cardFeature1 } from '@ease-lite/card-feature-1';
import { loanFeature4 } from '@ease-lite/loan-feature-4';

export function bankFeature5(): string {
  return `bank-feature-5 integrating with ${cardFeature1()} and ${loanFeature4()}`;
}
