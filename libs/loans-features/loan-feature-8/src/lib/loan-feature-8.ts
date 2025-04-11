import { cardFeature2 } from '@ease-lite/card-feature-2';
import { cardFeature5 } from '@ease-lite/card-feature-5';
import { bankFeature2 } from '@ease-lite/bank-feature-2';

export function loanFeature8(): string {
  return `loan-feature-8 integrating with ${cardFeature2()}, ${cardFeature5()}, and ${bankFeature2()}`;
}
