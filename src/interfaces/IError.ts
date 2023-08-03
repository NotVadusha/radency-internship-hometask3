import { StatusCodes } from "http-status-codes";

export interface IError {
  name?: string;
  httpCode: StatusCodes;
  message: string;
}
