import { Button } from "@/components/button";
import { ITEMS_PER_PAGE, STALE_TIME } from "@/constants/general.const";
import useFilterProperties from "@/hooks/useFilterProperties";
import { getProperties } from "@/store/property.service";
import { PropertyItemData } from "@/types/property.types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PropertyItemLoading } from "./PropertyItem";
import { Filter, ListProperty, Pagination } from "./list";
/**
 * Renders the PropertyList component.
 *
 * @param {Array<PropertyItemData>} properties - An array of property item data.
 * @return {JSX.Element} The rendered PropertyList component.
 */
const PropertyList = (): JSX.Element => {
  const { filter }                 = useFilterProperties();
  const [page, setPage]            = useState<number>(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", filter.text, filter.status, filter.type, page],
    queryFn: () =>
      getProperties({
        text: filter.text,
        status: filter.status,
        type: filter.type,
        offset: (page - 1) * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
      }),
    staleTime: STALE_TIME,
  });

  if (!data) {
    return <></>;
  }
  const properties = data.properties;
  if (!properties) {
    return <></>;
  }

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
  const handleLoadMore = () => {
    return;
  }
  return (
    <div className="bg-grayfc flex-shrink-0 rounded-2xl p-5">
      <Filter />
      <ListProperty properties={properties} />
      <Button className="mx-auto rounded-lg text-sm font-medium" onClick={handleLoadMore}>Load more</Button>
      <Pagination page={page} setPage={setPage} total={data.total} />
    </div>
  );
};

export default PropertyList;
