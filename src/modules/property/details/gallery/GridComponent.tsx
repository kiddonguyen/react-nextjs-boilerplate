import { GridComponentProps } from "@/types/general.types";
import { AdditionalImages } from "./AdditionalImages";
import { MainImage } from "./MainImage";

/**
 * Renders a grid component with main and additional images.
 *
 * @param {GridComponentProps} images - An array of images.
 * @returns {JSX.Element} The rendered grid component.
 */
export const GridComponent = ({ images }: GridComponentProps): JSX.Element => (
  <div className="grid grid-cols-[3fr_1fr] grid-rows-[162px_162px] gap-5">
    {images && images[0] && <MainImage src={images[0]} />}
    {images && images.slice(1, 3).length > 0 && (
      <AdditionalImages images={images.slice(1, 3)} />
    )}
  </div>
);
