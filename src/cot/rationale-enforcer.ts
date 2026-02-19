import type { Task, RationaleBlock } from '../core/types';

export class RationaleEnforcer {
  // stub — returns empty rationale
  generate(_task: Task): RationaleBlock {
    return {
      taskId: _task.id,
      reasoning: '',
      expectedOutcome: '',
      timestamp: new Date(),
    };
  }
}
