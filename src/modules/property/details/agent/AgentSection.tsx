import { Heading } from "@/components/common";
import { PropertyAgent } from "@/types/property.types";
import Image from "next/image";
import { ButtonGroup } from "./ButtonGroup";

/**
 * Renders the agent section.
 *
 * @param {AgentProps} data - The data object containing information about the agent.
 * @return {JSX.Element} The rendered agent section.
 */
export function AgentSection({ agent }: { agent: PropertyAgent }): JSX.Element {
  return (
    <section
      aria-label="agent"
      className="flex flex-col items-center justify-center px-6 py-4 border rounded-lg border-graye4 bg-grayfc"
    >
      <div className="relative w-[90px] aspect-square">
        <Image
          fill
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
          className="object-cover mb-4 rounded-full"
          alt={agent?.name || ""}
          sizes="10vw"
        />
      </div>
      <Heading level="h3" className="mb-2 text-lg font-semibold">
        {agent?.name || ""}
      </Heading>
      <div className="text-sm text-gray80">{agent?.address || ""}</div>
      <div className="my-2 font-semibold">
        {agent?.properties || ""} Properties
      </div>
      <ButtonGroup></ButtonGroup>
    </section>
  );
}
