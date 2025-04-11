export * from './lib/accounts/accounts.component';

// Import generated loan feature libraries
import { loanFeature1 } from '@ease-lite/loan-feature-1';
import { loanFeature2 } from '@ease-lite/loan-feature-2';
import { loanFeature3 } from '@ease-lite/loan-feature-3';
import { loanFeature4 } from '@ease-lite/loan-feature-4';
import { loanFeature5 } from '@ease-lite/loan-feature-5';
import { loanFeature6 } from '@ease-lite/loan-feature-6';
import { loanFeature7 } from '@ease-lite/loan-feature-7';
import { loanFeature8 } from '@ease-lite/loan-feature-8';
import { loanFeature9 } from '@ease-lite/loan-feature-9';
import { loanFeature10 } from '@ease-lite/loan-feature-10';
import { loanFeature11 } from '@ease-lite/loan-feature-11';
import { loanFeature12 } from '@ease-lite/loan-feature-12';
import { loanFeature13 } from '@ease-lite/loan-feature-13';
import { loanFeature14 } from '@ease-lite/loan-feature-14';
import { loanFeature15 } from '@ease-lite/loan-feature-15';

export function getLoanAccountFeatures(): string[] {
  // Group the features to make the code more readable
  const coreFeatures = [
    loanFeature1(),
    loanFeature2(),
    loanFeature3(),
    loanFeature4(),
    loanFeature5(),
  ];

  const managementFeatures = [
    loanFeature6(),
    loanFeature7(),
    loanFeature8(),
    loanFeature9(),
    loanFeature10(),
  ];

  const advancedFeatures = [
    loanFeature11(),
    loanFeature12(),
    loanFeature13(),
    loanFeature14(),
    loanFeature15(),
  ];

  return [...coreFeatures, ...managementFeatures, ...advancedFeatures];
}
