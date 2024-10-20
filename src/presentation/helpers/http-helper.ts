import { HttpResponse } from "../protocols/http";
import { ServerError, UnauthorizedError } from "../errors";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (errors: Error | Error[]): HttpResponse => {
  if (Array.isArray(errors)) {
    return {
      statusCode: 403,
      body: errors.map((error) => ({ message: error.message })),
    };
  }
  return {
    statusCode: 403,
    body: { message: errors.message },
  };
};

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});
