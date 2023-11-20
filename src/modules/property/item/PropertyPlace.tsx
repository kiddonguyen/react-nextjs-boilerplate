/**
 * Renders the property place component.
 * @param children: React.ReactNode; - The component props.
 * @returns {JSX.Element} - The rendered JSX element.
 */
export function PropertyPlace({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <h3 className="text-base font-semibold mb-1">{children}</h3>;
}
