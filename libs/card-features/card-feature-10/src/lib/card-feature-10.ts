import { bankFeature4 } from '@ease-lite/bank-feature-4';
import { loanFeature2 } from '@ease-lite/loan-feature-2';

export function cardFeature10(): string {
  return `card-feature-10 using ${bankFeature4()} and ${loanFeature2()}`;
}
