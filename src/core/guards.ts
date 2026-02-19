import type { Task, Intent } from './types';

// Stubs — intentionally return false. Tests will fail (RED).
// Implementation follows in the next commit.

export function isTask(_value: unknown): _value is Task {
  return false;
}

export function isIntent(_value: unknown): _value is Intent {
  return false;
}
