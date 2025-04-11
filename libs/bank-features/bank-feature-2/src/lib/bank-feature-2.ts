import { bankFeature1 } from '@ease-lite/bank-feature-1';

export function bankFeature2(): string {
  return `bank-feature-2 using ${bankFeature1()}`;
}
