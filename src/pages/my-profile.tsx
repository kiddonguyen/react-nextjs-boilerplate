import { LayoutMain } from "@/components/layout";
import { UserProfile } from "@clerk/nextjs";

const MyProfile = () => {
  return (
    <LayoutMain>
      <UserProfile></UserProfile>
    </LayoutMain>
  );
};

export default MyProfile;
