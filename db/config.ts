import { column, defineDb, defineTable } from "astro:db";

const posts = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text({}),
    content: column.text({}),
    status: column.text({}),
    created_at: column.date({}),
    updated_at: column.date({}),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    posts,
  },
});
