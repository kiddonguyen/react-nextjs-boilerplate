/* eslint-disable @next/next/no-img-element */
import { AgentProps } from '@/types/general.types';
import { AgentSection, BookNowSection } from "./agent/";

/**
 * Renders the Agent component.
 *
 * @param {AgentProps} agent - The agent object containing information about the agent.
 * @return {JSX.Element} The rendered Agent component.
 */
export function Agent({ agent }: AgentProps): JSX.Element {
  if (!agent) {
    return <div>No agent information available.</div>;
  }
  return (
    <div aria-label="right" className="flex flex-col gap-5">
      <AgentSection agent={agent} />
      <BookNowSection />
    </div>
  );
}
