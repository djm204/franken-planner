import type { PlanResult, PlanningStrategyName } from '../core/types';
import type { PlanGraph } from '../core/dag';
import type { PlanContext, PlanningStrategy } from './types';

// Stub — always returns completed with no results. Tests will fail (RED).
// Failure handling added in a subsequent commit.
export class LinearPlanner implements PlanningStrategy {
  readonly name: PlanningStrategyName = 'linear';

  async execute(_graph: PlanGraph, _context: PlanContext): Promise<PlanResult> {
    return { status: 'completed', taskResults: [] };
  }
}
