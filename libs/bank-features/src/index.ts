// Bank Features Parent Module
import { bankFeature1 } from '@ease-lite/bank-feature-1';
import { bankFeature2 } from '@ease-lite/bank-feature-2';
import { bankFeature4 } from '@ease-lite/bank-feature-4';
import { bankFeature7 } from '@ease-lite/bank-feature-7';
import { bankFeature9 } from '@ease-lite/bank-feature-9';

export * from '@ease-lite/bank-feature-1';
export * from '@ease-lite/bank-feature-2';
export * from '@ease-lite/bank-feature-4';
export * from '@ease-lite/bank-feature-7';
export * from '@ease-lite/bank-feature-9';

export function getAllBankFeatures(): string[] {
  return [
    bankFeature1(),
    bankFeature2(),
    bankFeature4(),
    bankFeature7(),
    bankFeature9(),
  ];
}
