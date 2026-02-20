import type { TaskId, KnownError } from '../core/types';
import type { PlanGraph } from '../core/dag';

export class RecoveryPlanGenerator {
  // stub — returns graph unchanged
  generate(_failedTaskId: TaskId, _knownError: KnownError, graph: PlanGraph, _attempt: number): PlanGraph {
    return graph;
  }
}
