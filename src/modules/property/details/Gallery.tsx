import { GridComponent } from "./gallery/GridComponent";


/**
 * Renders a gallery component.
 *
 * @param {Object} data - The data for the gallery component.
 * @param {Array} data.images - The array of images to be displayed in the gallery.
 * @return {JSX.Element} The rendered gallery component.
 */
export function Gallery({ data }: { data: PropertyItemData }): JSX.Element {
  return (
    <div aria-label="gallery" className="mb-4">
      <GridComponent images={data.images}></GridComponent>
    </div>
  );
}
