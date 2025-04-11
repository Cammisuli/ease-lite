import { cardFeature10 } from '@ease-lite/card-feature-10';
import { bankFeature7 } from '@ease-lite/bank-feature-7';

export function loanFeature5(): string {
  return `loan-feature-5 using ${cardFeature10()} and ${bankFeature7()}`;
}
