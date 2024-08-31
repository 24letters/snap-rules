import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => {
          return (
            <div key={image.id} className="flex w-48 flex-col">
              <Image width={300} height={200} key={image.url} src={image.url} />
              <div>{image.name}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
