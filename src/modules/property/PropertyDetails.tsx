import HeadContent from "@/components/HeadContent";
import { Spinner } from "@/components/loading";
import { getProperty } from "@/store/property.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
/* eslint-disable @next/next/no-img-element */
import { CACHE_TIME, STALE_TIME } from "@/constants/general.const";
import { Agent, BackLink, LeftSection } from "./details";

const PropertyDetails = (posts: any) => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", id],
    queryFn: () => getProperty(id),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
    enabled: !!id,
    // initialData: posts?.posts || {},
  });
  if (!data || error) return;
  if (isLoading) return <Spinner></Spinner>;
  const facilities = Object.entries(data?.facility || {});
  const agent = data?.agent;
  return (
    <>
      <HeadContent title={data.title}></HeadContent>
      <div className="p-5 bg-grayfc rounded-2xl">
        <BackLink />
        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <LeftSection data={data} facilities={facilities} />
          <Agent
            name={agent?.name}
            address={agent?.address}
            properties={agent?.properties}
          />
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
