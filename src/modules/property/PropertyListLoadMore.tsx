import { Button } from "@/components/button";
import {
  CACHE_TIME,
  ITEMS_PER_PAGE,
  STALE_TIME,
} from "@/constants/general.const";
import useFilterProperties from "@/hooks/useFilterProperties";
import { getProperties } from "@/store/property.service";
import { PropertyItemData } from "@/types/property.types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PropertyItemLoading } from "./PropertyItem";
import { Filter, ListProperty } from "./list";
/**
 * Renders the PropertyList component.
 *
 * @param {Array<PropertyItemData>} properties - An array of property item data.
 * @return {JSX.Element} The rendered PropertyList component.
 */
const PropertyListLoadMore = (): JSX.Element => {
  const { filter } = useFilterProperties();
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["properties", filter.text, filter.status, filter.type],
    queryFn: ({ pageParam = 0 }) =>
      getProperties({
        text: filter.text,
        status: filter.status,
        type: filter.type,
        limit: ITEMS_PER_PAGE,
        offset: pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const properties = lastPage?.properties || [];
      if (properties.length < ITEMS_PER_PAGE) {
        return undefined;
      }
      return ((lastPage && lastPage?.offset) || 0) + properties.length;
    },
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  if (!data) {
    return <></>;
  }
  const properties = data.pages[0]?.properties || [];
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
    hasNextPage && fetchNextPage();
  };
  if (error) {
    return <></>;
  }
  return (
    <div className="bg-grayfc flex-shrink-0 rounded-2xl p-5">
      <Filter />
      <ListProperty data={data} />
      {hasNextPage && (
        <Button
          isLoading={isFetchingNextPage || isFetching}
          className="mx-auto rounded-lg text-sm font-medium w-24"
          onClick={handleLoadMore}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default PropertyListLoadMore;
