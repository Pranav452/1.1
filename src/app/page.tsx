import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";
const mockUrls = [
 
  "https://utfs.io/f/9420a772-4a3e-4b57-bbf9-ee36c0b10dd1-nrqgva.PNG",
  "https://utfs.io/f/9420a772-4a3e-4b57-bbf9-ee36c0b10dd1-nrqgva.PNG",
  "https://utfs.io/f/9420a772-4a3e-4b57-bbf9-ee36c0b10dd1-nrqgva.PNG",
  "https://utfs.io/f/9420a772-4a3e-4b57-bbf9-ee36c0b10dd1-nrqgva.PNG",
 
];

const mockImages = mockUrls.map((url,index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
    
        {[...images, ...images, ...images,].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
          
              <img src={image.url}  />
             <div> {image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
