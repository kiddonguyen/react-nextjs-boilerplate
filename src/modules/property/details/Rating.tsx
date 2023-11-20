import { IconRating } from "@/components/icons";

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
