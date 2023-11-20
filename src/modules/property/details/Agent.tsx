/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button";
import { IconCall, IconMessage } from "@/components/icons";
import Image from "next/image";

/**
 * Renders an agent component with the provided information.
 *
 * @param {PropertyAgent} { name, address, properties } - The agent's name, address, and number of properties.
 * @return {JSX.Element} The rendered agent component.
 */
export function Agent({
  name,
  address,
  properties,
}: PropertyAgent): JSX.Element {
  return (
    <div aria-label="right" className="flex flex-col gap-5">
      <div
        aria-label="agent"
        className="flex flex-col items-center justify-center px-6 py-4 border rounded-lg border-graye4 bg-grayfc"
      >
        <div className="relative w-[90px] aspect-square ">
          <Image
            fill
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
            className="object-cover mb-4 rounded-full"
            alt=""
            sizes="10vw"
          />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{name}</h3>
        <div className="text-sm text-gray80">{address}</div>
        <div className="my-2 font-semibold">{properties} Properties</div>
        <div className="grid grid-cols-2 gap-5 mt-6">
          <Button variant="primary" size="md" className="rounded-[5px] px-4">
            <IconMessage></IconMessage>
            <span>Message</span>
          </Button>
          <Button variant="secondary" size="md" className="rounded-[5px] px-4">
            <IconCall></IconCall>
            <span>Call</span>
          </Button>
        </div>
      </div>
      <div aria-label="map">
        <img src="/map.png" alt="" />
      </div>
      <div>
        <Button
          variant="primary"
          className="w-full rounded-[10px] h-12"
          size="lg"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
