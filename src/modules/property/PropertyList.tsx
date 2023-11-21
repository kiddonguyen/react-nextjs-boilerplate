import { Filter, ListProperty, Pagination } from "./list";
/**
 * Renders the PropertyList component.
 *
 * @param {Array<PropertyItemData>} properties - An array of property item data.
 * @return {JSX.Element} The rendered PropertyList component.
 */
const PropertyList = ({
  properties,
}: {
  properties: PropertyItemData[];
}): JSX.Element => {
  return (
    <div className="bg-grayfc flex-shrink-0 rounded-2xl p-5">
      <Filter />
      <ListProperty properties={properties} />
      <Pagination />
    </div>
  );
};

export default PropertyList;
