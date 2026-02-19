export class CyclicDependencyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CyclicDependencyError';
    Object.setPrototypeOf(this, CyclicDependencyError.prototype);
  }
}

export class TaskNotFoundError extends Error {
  constructor(taskId: string) {
    super(`Task '${taskId}' not found in graph`);
    this.name = 'TaskNotFoundError';
    Object.setPrototypeOf(this, TaskNotFoundError.prototype);
  }
}

export class DuplicateTaskError extends Error {
  constructor(taskId: string) {
    super(`Task '${taskId}' already exists in graph`);
    this.name = 'DuplicateTaskError';
    Object.setPrototypeOf(this, DuplicateTaskError.prototype);
  }
}
