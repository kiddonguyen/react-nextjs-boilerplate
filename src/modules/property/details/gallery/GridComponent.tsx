import { PropertyItemData } from "@/types/property.types";
import { AdditionalImages } from "./AdditionalImages";
import { MainImage } from "./MainImage";

export const GridComponent = ({ image }: { image: PropertyItemData["image"] }) => (
  <div className="grid grid-cols-[3fr_1fr] grid-rows-[162px_162px] gap-5">
    {image && image[0] && <MainImage src={image[0]} />}
    {image && image.slice(1, 3).length > 0 && (
      <AdditionalImages images={image.slice(1, 3)} />
    )}
  </div>
);
