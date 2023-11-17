import { TSidebarLink } from "@/types/general.types";
import {
  IconDashboard,
  IconBuilding,
  IconPeople,
  IconReview,
  IconMessage,
  IconProfile,
} from "@/components/icons";
export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconBuilding />,
    path: "/property",
  },
  {
    title: "Agent",
    icon: <IconPeople />,
    path: "/agent",
  },
  {
    title: "Review",
    icon: <IconReview />,
    path: "/review",
  },
  {
    title: "Message",
    icon: <IconMessage />,
    path: "/message",
  },
  {
    title: "Profile",
    icon: <IconProfile />,
    path: "/profile",
  },
];
