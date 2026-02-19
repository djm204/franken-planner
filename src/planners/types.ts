import type { Task, TaskResult, PlanResult, PlanningStrategyName } from '../core/types';
import type { PlanGraph } from '../core/dag';

/**
 * Executes a single task and returns its result.
 * Injected into planners to decouple execution logic from planning logic.
 */
export type TaskExecutor = (task: Task) => Promise<TaskResult>;

/**
 * Runtime context provided to every planning strategy.
 * Extended by later modules (CoT enforcement, HITL gate).
 */
export interface PlanContext {
  executor: TaskExecutor;
}

/**
 * Contract every planning strategy must satisfy (ADR-004).
 * Strategies are injected into the Planner, never instantiated internally.
 */
export interface PlanningStrategy {
  readonly name: PlanningStrategyName;
  execute(graph: PlanGraph, context: PlanContext): Promise<PlanResult>;
}
