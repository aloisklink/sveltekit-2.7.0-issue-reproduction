import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
  const response = await fetch('/favicon.png');
  if (response.ok) {
    return new Response(await response.arrayBuffer(), {
      headers: {
        'Content-Type': 'image/png',
      },
    });
  } else {
    return response;
  }
};
