export const notFound = (page: string) => {
  return new Response(
    `<h1>Not Found</h1><p>The requested URL ${page} was not found on this server.</p>`,
    {
      status: 404,
      statusText: "Not Found",
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  );
};
