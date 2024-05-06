import { Request, Response, NextFunction } from "express";

// Middleware de errorHandler
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);
  res.status(500).send("Error");
}
