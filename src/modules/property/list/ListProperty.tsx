import PropertyItem from "../PropertyItem";

/**
 * Renders a list of property items.
 *
 * @param {Object[]} properties - An array of property items.
 * @param {string} properties[].id - The unique identifier of the property item.
 * @param {string} properties[].name - The name of the property item.
 * @param {string} properties[].value - The value of the property item.
 * @return {JSX.Element} The rendered list of property items.
 */
export function ListProperty({
  properties,
}: {
  properties: PropertyItemData[];
}): JSX.Element {
  return (
    <div aria-label="list" className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9">
      {properties?.length > 0 &&
        properties?.map((property: PropertyItemData) => (
          <PropertyItem key={property.id} data={property} />
        ))}
    </div>
  );
}
