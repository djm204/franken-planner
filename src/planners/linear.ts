import type { PlanResult, PlanningStrategyName, TaskResult } from '../core/types';
import type { PlanGraph } from '../core/dag';
import type { PlanContext, PlanningStrategy } from './types';

export class LinearPlanner implements PlanningStrategy {
  readonly name: PlanningStrategyName = 'linear';

  /**
   * Executes tasks one-by-one in topological order.
   * Returns 'completed' when all tasks succeed.
   * Failure handling added in next commit.
   */
  async execute(graph: PlanGraph, context: PlanContext): Promise<PlanResult> {
    const tasks = graph.topoSort();
    const taskResults: TaskResult[] = [];

    for (const task of tasks) {
      const result = await context.executor(task);
      taskResults.push(result);
    }

    return { status: 'completed', taskResults };
  }
}
