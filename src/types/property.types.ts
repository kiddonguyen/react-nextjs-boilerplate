interface PropertyInfo {
  beds?: number;
  baths?: number;
  area?: string;
  "smoking-area"?: boolean;
  kitchen?: boolean;
  balcony?: boolean;
  wifi?: boolean;
  "parking-area"?: boolean;
}

interface PropertyAgent {
  name?: string;
  phone?: string;
  address?: string;
  properties?: number;
}

interface PropertyItemData {
  id?: number;
  title?: string;
  address?: string;
  facility?: PropertyInfo;
  status?: string;
  type?: string;
  price?: number;
  image?: string[];
  country?: string;
  description?: string;
  rating?: number;
  state?: string;
  agent?: PropertyAgent;
}
