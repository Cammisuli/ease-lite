import { loanFeature2 } from '@ease-lite/loan-feature-2';
import { bankFeature7 } from '@ease-lite/bank-feature-7';

export function loanFeature3(): string {
  return `loan-feature-3 using ${loanFeature2()} and ${bankFeature7()}`;
}
