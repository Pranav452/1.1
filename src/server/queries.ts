import "server-only";

import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {

const user =auth();
if (!user.userId) throw new Error("Unauthorized");//(if u comment this line everyusers can se everyones images)

  const images = await db.query.images.findMany({
   where: (model, {eq}) => eq(model.userId, user.userId),//(if u comment this line everyusers can se everyones images)
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}
