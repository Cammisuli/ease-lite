export * from './lib/pay-bill/pay-bill.component';

// Import generated bank feature libraries
import { bankFeature7 } from '@ease-lite/bank-feature-7';
import { bankFeature8 } from '@ease-lite/bank-feature-8';
import { bankFeature9 } from '@ease-lite/bank-feature-9';

export function getPayBillFeatures(): string[] {
  return [bankFeature7(), bankFeature8(), bankFeature9()];
}
