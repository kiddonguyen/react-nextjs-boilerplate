import { getProperties } from "@/store/property.service";
import { Filter, ListProperty, Pagination } from "./list";
import { useQuery } from "@tanstack/react-query";
import { PropertyItemData } from "@/types/property.types";
import { PropertyItemLoading } from "./PropertyItem";
/**
 * Renders the PropertyList component.
 *
 * @param {Array<PropertyItemData>} properties - An array of property item data.
 * @return {JSX.Element} The rendered PropertyList component.
 */
const PropertyList = (): JSX.Element => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
    staleTime: 1000 * 60,
  });
  const properties = data?.properties || [];
  if (error || properties?.length === 0) return <div>Something went wrong</div>;
  if (isLoading)
    return (
      <>
        <div
          aria-label="list"
          className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
        >
          {Array(4).fill(0) &&
            properties?.map((property: PropertyItemData) => (
              <PropertyItemLoading key={property.id} />
            ))}
        </div>
      </>
    );
  return (
    <div className="bg-grayfc flex-shrink-0 rounded-2xl p-5">
      <Filter />
      <ListProperty properties={properties} />
      <Pagination />
    </div>
  );
};

export default PropertyList;
