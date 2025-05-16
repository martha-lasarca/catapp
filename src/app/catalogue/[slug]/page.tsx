export default function PublicCatalogue({
  params,
}: {
  params: { slug: string }
}) {
  return <h1>Public View of Catalogue: {params.slug}</h1>
}
