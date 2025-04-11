export * from './lib/checking-account/checking-account.component';

// Import generated bank feature libraries
import { bankFeature4 } from '@ease-lite/bank-feature-4';
import { bankFeature5 } from '@ease-lite/bank-feature-5';
import { bankFeature6 } from '@ease-lite/bank-feature-6';

export function getCheckingAccountFeatures(): string[] {
  return [bankFeature4(), bankFeature5(), bankFeature6()];
}
