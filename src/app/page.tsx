import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";


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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages,].map((image) => (
          <div key={image.id} className="w-48">
          
              <img src={image.url}  />
             
          </div>
        ))}
      </div>
    </main>
  );
}
