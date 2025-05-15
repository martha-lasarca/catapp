import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: persist req.body
  res.status(200).json({ success: true });
}
