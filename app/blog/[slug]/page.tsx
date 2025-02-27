type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: PageProps) {
  return <h1>Slug: {params.slug}</h1>;
}
