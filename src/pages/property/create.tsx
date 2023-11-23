import HeadContent from "@/components/HeadContent";
import { LayoutMain } from "@/components/layout";
import { addNewProperty } from "@/store/property.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PropertyCreatePage = () => {
  const queryClient             = useQueryClient();
  const mutation                = useMutation({
    mutationFn: addNewProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
  const handleCreateNewProperty = () => {
    mutation.mutate();
  };
  return (
    <>
      <HeadContent />
      <LayoutMain>
        <button onClick={handleCreateNewProperty}>Add new property</button>
      </LayoutMain>
    </>
  );
};

export default PropertyCreatePage;
