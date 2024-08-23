type FetchBaseQueryError =
    | {
          status: number;
          data: {
              error: string;
          };
      }
    | {
          status: "FETCH_ERROR";
          data: {
              error: string;
          };
          error: string;
      }
    | {
          status: "PARSING_ERROR";
          originalStatus: number;
          data: {
              error: string;
          };
          error: string;
      }
    | {
          status: "TIMEOUT_ERROR";
          data: {
              error: string;
          };
          error: string;
      }
    | {
          status: "CUSTOM_ERROR";
          data: {
              error: string;
          };
          error: string;
      };
/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
    error: unknown
): error is FetchBaseQueryError {
    return typeof error === "object" && error != null && "status" in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
    error: unknown
): error is { message: string } {
    return (
        typeof error === "object" &&
        error != null &&
        "message" in error &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof (error as any).message === "string"
    );
}
