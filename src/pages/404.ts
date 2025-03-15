import type { APIRoute } from "astro";
import { notFound } from "../lib/errors";

export const GET: APIRoute = (context) => {
  return notFound(context.url.pathname);
};
