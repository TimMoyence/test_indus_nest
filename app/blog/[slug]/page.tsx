import { Metadata } from 'next';

type Params = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: { params: Params }) {
  return <h1>Slug: {params.slug}</h1>;
}
