import { loanFeature1 } from '@ease-lite/loan-feature-1';
import { cardFeature3 } from '@ease-lite/card-feature-3';

export function loanFeature2(): string {
  return `loan-feature-2 using ${loanFeature1()} and ${cardFeature3()}`;
}
