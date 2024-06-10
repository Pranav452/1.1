import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";
import { db } from "~/server/db";


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
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages,].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
          
              <img src={image.url}  />
             
          </div>
        ))}
      </div>
    </main>
  );
}
