import type { Task, TaskId } from './types';
import { CyclicDependencyError, DuplicateTaskError, TaskNotFoundError } from './errors';

export type { CyclicDependencyError, DuplicateTaskError, TaskNotFoundError };

export interface PlanVersion {
  version: number;
  graph: PlanGraph;
  reason: string;
  timestamp: Date;
}

// Stub — all methods return safe no-op defaults. Tests will fail (RED).
// Implementation follows in subsequent commits.
export class PlanGraph {
  private constructor(
    private readonly _nodes: ReadonlyMap<TaskId, Task>,
    private readonly _edges: ReadonlyMap<TaskId, ReadonlySet<TaskId>>,
    readonly version: number,
    readonly reason: string
  ) {}

  static empty(): PlanGraph {
    return new PlanGraph(new Map(), new Map(), 0, 'initial');
  }

  /** Escape hatch for testing — bypasses validation to allow cycle construction. */
  static createWithRawEdges(
    nodes: Map<TaskId, Task>,
    edges: Map<TaskId, Set<TaskId>>,
    version = 0,
    reason = 'test'
  ): PlanGraph {
    return new PlanGraph(nodes, edges, version, reason);
  }

  getTask(_taskId: TaskId): Task | undefined {
    return undefined;
  }

  getTasks(): Task[] {
    return [];
  }

  getDependencies(_taskId: TaskId): TaskId[] {
    return [];
  }

  size(): number {
    return 0;
  }

  hasCycle(): boolean {
    return false;
  }

  topoSort(): Task[] {
    return [];
  }

  addTask(_task: Task, _dependsOn: TaskId[] = []): PlanGraph {
    return this;
  }

  removeTask(_taskId: TaskId): PlanGraph {
    return this;
  }

  insertFixItTask(_failedTaskId: TaskId, _fixTask: Task): PlanGraph {
    return this;
  }

  clone(): PlanGraph {
    return this;
  }
}
