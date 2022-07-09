export const enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  PRECONDITION_FAILED = 412,
}

interface ErrorResponse extends Response {
  data?: string;
}

interface HttpError extends Error {
  status: number;
  response: ErrorResponse;
}

export const handleHttpError = (error: HttpError) => {
  switch (error.response.status) {
    case HttpStatus.UNAUTHORIZED:
      console.log("[HTTP] 401");
      break;
    case HttpStatus.PRECONDITION_FAILED:
      console.log("[HTTP] 412");
      break;
    case HttpStatus.NOT_FOUND:
      break;
    default:
      break;
  }

  throw Error(error.response.data || error.message);
};
