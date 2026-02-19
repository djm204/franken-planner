import type { TaskExecutor } from '../planners/types';
import type { SelfCritiqueModule } from '../modules/mod07';
import { RationaleEnforcer } from './rationale-enforcer';

/**
 * Wraps a TaskExecutor with a Chain-of-Thought gate.
 * stub — passes through to executor without CoT verification.
 */
export function buildCoTExecutor(
  executor: TaskExecutor,
  _selfCritique: SelfCritiqueModule,
  _enforcer: RationaleEnforcer = new RationaleEnforcer()
): TaskExecutor {
  return executor;
}
