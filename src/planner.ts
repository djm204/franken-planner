import type { PlanResult, TaskId } from './core/types';
import type { PlanGraph } from './core/dag';
import type { GuardrailsModule } from './modules/mod01';
import type { SelfCritiqueModule } from './modules/mod07';
import type { HITLGate } from './hitl/types';
import type { PlanningStrategy, TaskExecutor, GraphBuilder } from './planners/types';

/** Minimal recovery interface satisfied by RecoveryController (ADR-005). */
interface Recovery {
  recover(failedTaskId: TaskId, error: Error, graph: PlanGraph, attempt: number): Promise<PlanGraph>;
}

export class Planner {
  constructor(
    private readonly guardrails: GuardrailsModule,
    private readonly graphBuilder: GraphBuilder,
    private readonly executor: TaskExecutor,
    private readonly hitlGate: HITLGate,
    private readonly strategy: PlanningStrategy,
    private readonly recovery: Recovery,
    private readonly selfCritique?: SelfCritiqueModule
  ) {}

  // stub — always returns completed
  async plan(_rawInput: string): Promise<PlanResult> {
    void this.guardrails;
    void this.graphBuilder;
    void this.executor;
    void this.hitlGate;
    void this.strategy;
    void this.recovery;
    void this.selfCritique;
    return { status: 'completed', taskResults: [] };
  }
}
