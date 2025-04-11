export * from './lib/savings-account/savings-account.component';

// Import generated bank feature libraries
import { bankFeature10 } from '@ease-lite/bank-feature-10';
import { bankFeature11 } from '@ease-lite/bank-feature-11';
import { bankFeature12 } from '@ease-lite/bank-feature-12';
import { bankFeature13 } from '@ease-lite/bank-feature-13';
import { bankFeature14 } from '@ease-lite/bank-feature-14';
import { bankFeature15 } from '@ease-lite/bank-feature-15';

export function getSavingsAccountFeatures(): string[] {
  return [
    bankFeature10(),
    bankFeature11(),
    bankFeature12(),
    bankFeature13(),
    bankFeature14(),
    bankFeature15(),
  ];
}
