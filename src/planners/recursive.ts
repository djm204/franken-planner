import type { PlanResult } from '../core/types';
import type { PlanGraph } from '../core/dag';
import type { PlanContext, PlanningStrategy } from './types';

export class RecursivePlanner implements PlanningStrategy {
  readonly name = 'recursive' as const;

  constructor(private readonly maxDepth = 10) {}

  // stub — always returns completed with no results
  async execute(_graph: PlanGraph, _context: PlanContext): Promise<PlanResult> {
    void this.maxDepth;
    return { status: 'completed', taskResults: [] };
  }
}
