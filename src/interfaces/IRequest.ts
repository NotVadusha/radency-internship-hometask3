export interface TypedRequestParams<T> extends Express.Request {
  params: T;
}

export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}
