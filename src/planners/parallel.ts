import type { PlanResult } from '../core/types';
import type { PlanGraph } from '../core/dag';
import type { PlanContext, PlanningStrategy } from './types';

export class ParallelPlanner implements PlanningStrategy {
  readonly name = 'parallel' as const;

  // stub — always returns completed with no results
  async execute(_graph: PlanGraph, _context: PlanContext): Promise<PlanResult> {
    return { status: 'completed', taskResults: [] };
  }
}
