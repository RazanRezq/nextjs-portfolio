'use client';

import NextError from 'next/error';

export default function GlobalError({ error }: { error: Error }) {
  return <NextError statusCode={500} />;
}
