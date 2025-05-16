export default function CatalogueEditor({
  params,
}: {
  params: { slug: string }
}) {
  return <h1>Editor for Catalogue: {params.slug}</h1>
}
