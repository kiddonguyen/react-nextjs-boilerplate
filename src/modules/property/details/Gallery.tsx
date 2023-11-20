import Image from "next/image";

/**
 * Renders a gallery component with the provided image data.
 *
 * @param {PropertyItemData} image - The image data for the gallery.
 * @returns {JSX.Element} The rendered gallery component.
 */
export function Gallery({ image }: PropertyItemData): JSX.Element {
  return (
    <div aria-label="gallery" className="mb-4">
      <div className="grid grid-cols-[3fr_1fr] grid-rows-[162px_162px] gap-5">
        {image && image[0] && (
          <div className="relative row-[1/-1] col-[1/2]">
            <Image
              src={image[0]}
              fill
              alt=""
              className="object-cover w-full h-full rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
              priority
            />
          </div>
        )}
        {image &&
          image.slice(1, 3).map((item: string, index: number) => (
            <div className="relative" key={index}>
              <Image
                src={item}
                fill
                alt=""
                className="object-cover rounded-lg row-[1/2] h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
              />
              {index === 1 && (
                <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white bg-black bg-opacity-50 rounded-lg overlay">
                  +10
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
