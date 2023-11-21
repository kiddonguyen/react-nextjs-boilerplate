import { AdditionalImagesProps } from "@/types/general.types";
import Image from "next/image";

/**
 * Renders additional images.
 *
 * @param {AdditionalImagesProps} images - The array of images to be rendered.
 * @return {ReactElement} - The rendered additional images.
 */
export const AdditionalImages: React.FC<AdditionalImagesProps> = ({
  images,
}) => {
  return (
    <>
      {images &&
        images.map((item: string, index: number) => (
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
    </>
  );
};
