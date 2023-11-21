import { IconArrowLeft } from "@/components/icons";
import Link from "next/link";
import { Fragment } from "react";
import { Heading } from "../../../components/common/Heading";

/**
 * A React component that renders a link to the previous page.
 *
 * @param {} - No parameters needed for this component.
 * @return {JSX.Element} - The JSX element representing the previous page link.
 */

export function PreviousPageLink({}: {}): JSX.Element {
  return (
    <Fragment>
      <Heading
        level="h2"
        className="flex items-center gap-5 mb-6 text-xl font-medium"
      >
        <Link href="/properties" title="Back to Properties page" target="_self">
          <IconArrowLeft></IconArrowLeft>
        </Link>
        Details
      </Heading>
    </Fragment>
  );
}
