import { LayoutMain } from "@/components/layout";
import PropertyDetails from "@/modules/property/PropertyDetails";
import { getProperty } from "@/store/property.service";

const PropertyDetailsPage = (props: any) => {
  return (
    <>
      <LayoutMain>
        <PropertyDetails posts={props.posts}></PropertyDetails>
      </LayoutMain>
    </>
  );
};
export async function getServerSideProps(context: any) {
  if (!context.query.id) {
    return {
      posts: {},
    };
  }
  const id    = +context.query.id;
  const posts = await getProperty(id);
  return {
    props: {
      posts: posts || {},
    }
  }
}

export default PropertyDetailsPage;
