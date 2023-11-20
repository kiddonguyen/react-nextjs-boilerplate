/**
 * Renders a description component.
 *
 * @param {string} description - The description to be rendered.
 * @return {JSX.Element} The rendered description component.
 */
export function Description({ description }: PropertyItemData): JSX.Element {
  return (
    <>
      <h3 className="text-lg font-medium mb-2.5">Description</h3>
      <div className="text-sm leading-normal text-gray80">{description}</div>
    </>
  );
}
