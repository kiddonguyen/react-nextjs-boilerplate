
/**
 * Render a property information component.
 *
 * @param {PropertyItemData} data - The data for the property item.
 * @return {JSX.Element} - The rendered property information component.
 */
export function PropertyInfo({
  data
}: {
  data: PropertyItemData;
}) {
  return <div className="flex flex-col gap-2">
      <span className="block text-lg font-medium">{data.type}</span>
      <h1 className="text-xl font-medium">{data.title}</h1>
      <div className="flex items-center gap-1 text-sm text-gray80">
        <span></span>
        <span>{data.address}</span>
      </div>
    </div>;
}
  