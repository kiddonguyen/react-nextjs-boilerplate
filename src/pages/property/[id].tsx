import HeadContent from "@/components/HeadContent";
import { LayoutMain } from "@/components/layout";
import PropertyDetails from "@/modules/property/PropertyDetails";

const PropertyDetailsPage = () => {
  return (
    <>
      <LayoutMain>
        <PropertyDetails></PropertyDetails>
      </LayoutMain>
    </>
  );
};

export default PropertyDetailsPage;
