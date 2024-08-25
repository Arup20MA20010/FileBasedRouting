import type { Request, Response, NextFunction } from 'express';

interface RouteParams {
  id: string;
}

export default function productsHandler(
  _: Request,
  res: Response,
  _next: NextFunction,
  routeParams: RouteParams
) {
  const { id } = routeParams;
  res.status(200).json({ id, name: `Category ${id}` })
}
