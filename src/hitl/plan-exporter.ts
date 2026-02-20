import type { PlanGraph } from '../core/dag';

export class PlanExporter {
  // stub — always returns empty string
  toMarkdown(_graph: PlanGraph): string {
    return '';
  }
}
