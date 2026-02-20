import type { TaskId } from '../core/types';
import type { PlanGraph } from '../core/dag';
import type { MemoryModule } from '../modules/mod03';
import { ErrorIngester } from './error-ingester';
import { RecoveryPlanGenerator } from './recovery-plan-generator';

export class RecoveryController {
  constructor(
    private readonly memory: MemoryModule,
    private readonly errorIngester = new ErrorIngester(),
    private readonly planGenerator = new RecoveryPlanGenerator(),
    private readonly maxAttempts = 3
  ) {}

  // stub — always returns graph unchanged
  async recover(_failedTaskId: TaskId, _error: Error, graph: PlanGraph, _attempt: number): Promise<PlanGraph> {
    void this.memory;
    void this.errorIngester;
    void this.planGenerator;
    void this.maxAttempts;
    return graph;
  }
}
