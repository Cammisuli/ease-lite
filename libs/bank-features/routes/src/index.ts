export * from './lib/lib.routes';

// Bank Features Routes Module
import { getAllBankFeatures } from '@ease-lite/bank-features';
import {
  cardFeature1,
  cardFeature3,
  cardFeature5,
} from '@ease-lite/card-features';
import { loanFeature1 } from '@ease-lite/loan-feature-1';
import { loanFeature2 } from '@ease-lite/loan-feature-2';

export function getBankRoutesData(): {
  bankFeatures: string[];
  cardIntegrations: string[];
  loanIntegrations: string[];
} {
  return {
    bankFeatures: getAllBankFeatures(),
    cardIntegrations: [cardFeature1(), cardFeature3(), cardFeature5()],
    loanIntegrations: [loanFeature1(), loanFeature2()],
  };
}
