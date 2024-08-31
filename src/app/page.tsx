import Image from "next/image";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
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
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>Please sign in to view the gallery</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
