import { bankFeature1 } from '@ease-lite/bank-feature-1';

export function loanFeature1(): string {
  return `loan-feature-1 using ${bankFeature1()}`;
}
