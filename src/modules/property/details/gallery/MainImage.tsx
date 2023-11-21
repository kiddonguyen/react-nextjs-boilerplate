import Image from "next/image";

/**
 * Render the main image component.
 *
 * @param {string} src - The source of the image.
 * @return {JSX.Element} The JSX element representing the main image component.
 */
export const MainImage = ({ src }: { src: string }): JSX.Element => (
  <div className="relative row-[1/-1] col-[1/2]">
    <Image
      src={src}
      fill
      alt=""
      className="object-cover w-full h-full rounded-lg"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
      priority
    />
  </div>
);
