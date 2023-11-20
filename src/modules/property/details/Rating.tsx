import { IconRating } from "@/components/icons";

/**
 * Render a rating component based on the given data.
 *
 * @param {Object} data - The data object containing the rating information.
 * @param {number} data.rating - The rating value.
 * @return {JSX.Element} The JSX element representing the rating component.
 */
export function Rating({ data }: { data: PropertyItemData }) {
  return (
    <div>
      {Array(Math.floor(data.rating || 0))
        .fill(0)
        .map((item, index) => (
          <span key={index} className="inline-block w-6 h-6">
            <IconRating></IconRating>
          </span>
        ))}
    </div>
  );
}
