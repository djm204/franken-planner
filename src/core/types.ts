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

// =============================================================================
// Planning Strategy
// =============================================================================

export type PlanningStrategyName = 'linear' | 'parallel' | 'recursive';

// =============================================================================
// Task & Plan Results
// =============================================================================

/** Task completed successfully, no expansion. */
export interface TaskResultSuccess {
  status: 'success';
  taskId: TaskId;
  output?: unknown;
  expand?: false;
}

/** Task completed and signals the recursive planner to expand with new tasks. */
export interface TaskResultExpand {
  status: 'success';
  taskId: TaskId;
  output?: unknown;
  expand: true;
  newTasks: Task[];
}

/** Task failed with an error. */
export interface TaskResultFailure {
  status: 'failure';
  taskId: TaskId;
  error: Error;
}

export type TaskResult = TaskResultSuccess | TaskResultExpand | TaskResultFailure;

export type PlanResult =
  | { status: 'completed'; taskResults: TaskResult[] }
  | { status: 'failed'; taskResults: TaskResult[]; failedTaskId: TaskId; error: Error }
  | { status: 'aborted'; reason: string }
  | { status: 'rationale_rejected'; taskId: TaskId };

// =============================================================================
// Intent (sanitized input from MOD-01)
// =============================================================================

export interface Intent {
  goal: string;
  strategy?: PlanningStrategyName;
  context?: Record<string, unknown>;
}

// =============================================================================
// Chain-of-Thought (CoT)
// =============================================================================

/** Rationale block emitted before every task dispatch, verified by MOD-07. */
export interface RationaleBlock {
  taskId: TaskId;
  reasoning: string;
  selectedTool?: string;
  expectedOutcome: string;
  timestamp: Date;
}

export type VerificationResult =
  | { verdict: 'approved' }
  | { verdict: 'rejected'; reason: string };

// =============================================================================
// Memory types (MOD-03 Semantic & Episodic Memory)
// =============================================================================

export type ADRStatus = 'proposed' | 'accepted' | 'deprecated' | 'superseded';

export interface ADR {
  id: string;
  title: string;
  status: ADRStatus;
  decision: string;
}

/** A known error pattern with a suggested fix, stored in MOD-03 episodic memory. */
export interface KnownError {
  pattern: string;
  description: string;
  fixSuggestion: string;
}

export interface ProjectContext {
  projectName: string;
  adrs: ADR[];
  rules: string[];
}
