// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/client';

export default async (req, res) => {
  const session = await getSession({req});
  console.log(session);
  res.status(200).json({ name: session.user.name })
}
