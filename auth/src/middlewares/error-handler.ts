import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("found error");
  console.log(err instanceof CustomError);

  if (err instanceof CustomError) {
    console.log(err);
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.log(err);

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
