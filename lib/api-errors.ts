export class ApiError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export function messageFromError(error: unknown) {
  return error instanceof Error ? error.message : "Unexpected error";
}
