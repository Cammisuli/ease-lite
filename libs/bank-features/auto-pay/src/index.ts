export * from './lib/auto-pay/auto-pay.component';

// Import generated bank feature libraries
import { bankFeature1 } from '@ease-lite/bank-feature-1';
import { bankFeature2 } from '@ease-lite/bank-feature-2';
import { bankFeature3 } from '@ease-lite/bank-feature-3';

export function getAutopayFeatures(): string[] {
  return [bankFeature1(), bankFeature2(), bankFeature3()];
}
