import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { HTTPException } from 'hono/http-exception'

const prisma = new PrismaClient();

const app = new Hono().get("/", clerkMiddleware(), async (c) => {

  const auth = getAuth(c);
  if(!auth?.userId) {
    throw new HTTPException(401, {
        res: c.json({error: 'Unauthorized'}, 401)
    })
  }
  const accounts = await prisma.accounts.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return c.json({
    accounts,
  });
});

export default app;
