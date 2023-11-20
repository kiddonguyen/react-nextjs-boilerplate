
export function Price({
  data
}: {
  data: PropertyItemData;
}) {
  return <>
      <div className="text-base font-medium">Price</div>
      <div>
        <strong className="text-2xl font-bold text-primary">
          ${data.price}
        </strong>
        <span className="text-sm text-gray80"> For One Day</span>
      </div>
    </>;
}
  