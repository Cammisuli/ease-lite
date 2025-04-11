export * from './lib/lib.routes';

// Card Features Routes Module
import { getAllCardFeatures } from '@ease-lite/card-features';
import { bankFeature1, bankFeature2 } from '@ease-lite/bank-features';
import { loanFeature1 } from '@ease-lite/loan-feature-1';

export function getCardRoutesData(): {
  cardFeatures: string[];
  bankIntegrations: string[];
  loanIntegrations: string[];
} {
  return {
    cardFeatures: getAllCardFeatures(),
    bankIntegrations: [bankFeature1(), bankFeature2()],
    loanIntegrations: [loanFeature1()],
  };
}
