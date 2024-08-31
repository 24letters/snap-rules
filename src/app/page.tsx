import Image from "next/image";
import { db } from "~/server/db";

const mockImages = [
  {
    name: "shinkansen-5237269_1920.jpg",
    key: "6420449a-6b01-4005-b3b9-8869e10c77e6-trt7hc.jpg",
    customId: null,
    url: "https://utfs.io/f/6420449a-6b01-4005-b3b9-8869e10c77e6-trt7hc.jpg",
    size: 662011,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "pyrite-626549_1920.jpg",
    key: "af7cecc4-a13a-45d7-a4a1-422ad1ceccdf-jjxcq1.jpg",
    customId: null,
    url: "https://utfs.io/f/af7cecc4-a13a-45d7-a4a1-422ad1ceccdf-jjxcq1.jpg",
    size: 164155,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "elephants-6176590_1920.jpg",
    key: "aa26a30d-be75-44ca-b185-7a6399f7ef55-kmqhoi.jpg",
    customId: null,
    url: "https://utfs.io/f/aa26a30d-be75-44ca-b185-7a6399f7ef55-kmqhoi.jpg",
    size: 597596,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "dubai-5740306_1920.jpg",
    key: "12ac76c0-2f31-487d-908d-ef68128366be-rjchvm.jpg",
    customId: null,
    url: "https://utfs.io/f/12ac76c0-2f31-487d-908d-ef68128366be-rjchvm.jpg",
    size: 637685,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "sky-5375005_1920.jpg",
    key: "e94649d2-ed77-4ee1-9b41-232ca34a9b7b-fy1l0o.jpg",
    customId: null,
    url: "https://utfs.io/f/e94649d2-ed77-4ee1-9b41-232ca34a9b7b-fy1l0o.jpg",
    size: 80042,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "lone-tree-6147402_1920.jpg",
    key: "1061bc4b-1f89-48d3-9990-4302777c88d9-7bufsn.jpg",
    customId: null,
    url: "https://utfs.io/f/1061bc4b-1f89-48d3-9990-4302777c88d9-7bufsn.jpg",
    size: 579807,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "businessman-5791566_1920.jpg",
    key: "6a26e969-2529-42a6-84c7-8b14d98ea583-omc3wj.jpg",
    customId: null,
    url: "https://utfs.io/f/6a26e969-2529-42a6-84c7-8b14d98ea583-omc3wj.jpg",
    size: 390825,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "landscape-5538015_1920.jpg",
    key: "a25bbec4-5539-4c04-88a6-049ac6ae3a43-ei2r0o.jpg",
    customId: null,
    url: "https://utfs.io/f/a25bbec4-5539-4c04-88a6-049ac6ae3a43-ei2r0o.jpg",
    size: 473962,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "buildings-5810399_1920.jpg",
    key: "48c7a011-8e0d-4ce3-9b58-8169682efb8e-31hggu.jpg",
    customId: null,
    url: "https://utfs.io/f/48c7a011-8e0d-4ce3-9b58-8169682efb8e-31hggu.jpg",
    size: 595474,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
  {
    name: "cocktail-glass-545371_1920.jpg",
    key: "7bda53b2-a040-4a14-80f3-7697220da05e-jn62lo.jpg",
    customId: null,
    url: "https://utfs.io/f/7bda53b2-a040-4a14-80f3-7697220da05e-jn62lo.jpg",
    size: 267998,
    uploadedAt: "2024-08-31T14:19:52.000Z",
  },
];

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => {
          return <div key={post.id}>{post.name}</div>;
        })}
        {mockImages.map((image) => {
          return (
            <Image width={300} height={200} key={image.url} src={image.url} />
          );
        })}
      </div>
    </main>
  );
}
