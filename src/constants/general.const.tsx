import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPeople,
  IconProfile,
  IconReview,
} from "@/components/icons";
import { TPropertyStatusData, TPropertyTypeData, TSidebarLink } from "@/types/general.types";
export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconBuilding />,
    path: "/properties",
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
    path: "/my-profile",
  },
];
export const STALE_TIME = 1000 * 60 * 5;
export const CACHE_TIME = STALE_TIME * 2; // Best practices
export const propertiesStatusData: TPropertyStatusData[] = [
  {
    value: "",
    label: "Any Status",
  },
  {
    value: "sale",
    label: "For Sale",
  },
  {
    value: "rent",
    label: "For Rent",
  },
];
export const propertiesTypeData: TPropertyTypeData[] = [
  {
    value: "",
    label: "Any Type",
  },
  {
    value: "apartments",
    label: "Apartments",
  },
  {
    value: "houses",
    label: "Houses",
  },
  {
    value: "commercial",
    label: "Commercial",
  },
  {
    value: "garages",
    label: "Garages",
  },
  {
    value: "lots",
    label: "Lots",
  },
];
export const ITEMS_PER_PAGE = 2;
