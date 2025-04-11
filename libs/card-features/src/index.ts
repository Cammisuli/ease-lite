// Card Features Parent Module
import { cardFeature1 } from '@ease-lite/card-feature-1';
import { cardFeature2 } from '@ease-lite/card-feature-2';
import { cardFeature3 } from '@ease-lite/card-feature-3';
import { cardFeature5 } from '@ease-lite/card-feature-5';
import { cardFeature10 } from '@ease-lite/card-feature-10';

export * from '@ease-lite/card-feature-1';
export * from '@ease-lite/card-feature-2';
export * from '@ease-lite/card-feature-3';
export * from '@ease-lite/card-feature-5';
export * from '@ease-lite/card-feature-10';

export function getAllCardFeatures(): string[] {
  return [
    cardFeature1(),
    cardFeature2(),
    cardFeature3(),
    cardFeature5(),
    cardFeature10(),
  ];
}
