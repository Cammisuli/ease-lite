export * from './lib/lib.routes';

import {
  cardFeature2,
  cardFeature5,
  cardFeature10,
} from '@ease-lite/card-features';
import {
  bankFeature1,
  bankFeature4,
  bankFeature9,
} from '@ease-lite/bank-features';

export function getLoansRoutesData(): {
  cardIntegrations: string[];
  bankIntegrations: string[];
} {
  return {
    cardIntegrations: [cardFeature2(), cardFeature5(), cardFeature10()],
    bankIntegrations: [bankFeature1(), bankFeature4(), bankFeature9()],
  };
}
