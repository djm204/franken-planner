import type { ApprovalResult, HITLGate } from './types';

// stub — always returns approved (configurable via constructor)
export class StubHITLGate implements HITLGate {
  constructor(private readonly result: ApprovalResult = { decision: 'approved' }) {}

  async requestApproval(_markdown: string): Promise<ApprovalResult> {
    return this.result;
  }
}
