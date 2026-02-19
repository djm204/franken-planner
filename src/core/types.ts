// =============================================================================
// Task Domain
// =============================================================================

/** Branded string type for type-safe task identifiers. */
export type TaskId = string & { readonly __brand: 'TaskId' };

/** Creates a TaskId from a plain string. Use at system boundaries only. */
export function createTaskId(id: string): TaskId {
  return id as TaskId;
}

export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'failed' | 'skipped';

export interface Task {
  id: TaskId;
  objective: string;
  requiredSkills: string[];
  dependsOn: TaskId[];
  status: TaskStatus;
  metadata?: Record<string, unknown>;
}
