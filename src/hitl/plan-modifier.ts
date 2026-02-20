import type { PlanGraph } from '../core/dag';
import type { TaskModification } from './types';

// stub — returns graph unchanged
export function applyModifications(graph: PlanGraph, _changes: TaskModification[]): PlanGraph {
  return graph;
}
