import { cardFeature2 } from '@ease-lite/card-feature-2';
import { cardFeature5 } from '@ease-lite/card-feature-5';

export function bankFeature4(): string {
  return `bank-feature-4 using ${cardFeature2()} and ${cardFeature5()}`;
}
