import { Button } from "@/components/button";
import { Map } from "./Map";

/**
 * Renders the book now section.
 */
export function BookNowSection() {
  return (
    <>
      <Map />
      <Button
        variant="primary"
        className="w-full rounded-[10px] h-12"
        size="lg"
      >
        Book Now
      </Button>
    </>
  );
}
