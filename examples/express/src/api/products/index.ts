import type { Request, Response } from "express"
export default function usersHandler(_: Request, res: Response) {
  res.status(200).
    json([
      { id: 1, name: 'Phone' },
      { id: 2, name: 'Gamebnoy' }
    ])
    ;
}
