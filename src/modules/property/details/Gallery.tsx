import { GridComponent } from "./gallery/GridComponent";

/**
 * Renders a gallery component with the provided image data.
 *
 * @param {PropertyItemData} images - The image data for the gallery.
 * @returns {JSX.Element} The rendered gallery component.
 */
export function Gallery({ images }: PropertyItemData): JSX.Element {
  return (
    <div aria-label="gallery" className="mb-4">
      <GridComponent images={images}></GridComponent>
    </div>
  );
}
