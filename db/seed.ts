import { db, posts } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(posts).values([
    {
      title: "Hello, world!",
      content: "This is the first post.",
      status: "published",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Second post",
      content: "This is the second post.",
      status: "published",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Third post",
      content: "This is the third post.",
      status: "draft",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Fourth post",
      content: "This is the fourth post.",
      status: "published",
      created_at: new Date(),
      updated_at: new Date(),
    },

    {
      title: "Fifth post",
      content: "This is the fifth post.",
      status: "published",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
