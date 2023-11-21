import { Button } from "@/components/button";
import { IconCall, IconMessage } from "@/components/icons";

/**
 * Renders a ButtonGroup component.
 *
 * @return {JSX.Element} The rendered ButtonGroup component.
 */
export const ButtonGroup = (): JSX.Element => (
  <div className="grid grid-cols-2 gap-5 mt-6">
    {["primary", "secondary"].map((variant) => (
      <Button variant={variant as "primary" | "secondary"} key={variant}>
        {variant === "primary" ? <IconMessage /> : <IconCall />}
        <span>{variant === "primary" ? "Message" : "Call"}</span>
      </Button>
    ))}
  </div>
);
