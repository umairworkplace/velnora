export function apiError(error: unknown) {
  if (error instanceof Error) return { error: error.message };
  return { error: "INTERNAL_ERROR" };
}
