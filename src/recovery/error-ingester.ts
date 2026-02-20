import type { KnownError } from '../core/types';

export type ErrorClassification =
  | { type: 'known'; knownError: KnownError }
  | { type: 'unknown' };

export class ErrorIngester {
  // stub — always returns unknown
  classify(_error: Error, _knownErrors: KnownError[]): ErrorClassification {
    return { type: 'unknown' };
  }
}
