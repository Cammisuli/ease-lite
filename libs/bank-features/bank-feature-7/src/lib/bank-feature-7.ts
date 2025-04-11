import { cardFeature3 } from '@ease-lite/card-feature-3';
import { loanFeature5 } from '@ease-lite/loan-feature-5';

export function bankFeature7(): string {
  return `bank-feature-7 using ${cardFeature3()} and ${loanFeature5()}`;
}
