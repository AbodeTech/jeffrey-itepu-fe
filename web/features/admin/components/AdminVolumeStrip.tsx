export function AdminVolumeStrip({
  points,
  label,
}: {
  points: { date: string; count: number }[]
  label: string
}) {
  const max = Math.max(1, ...points.map((point) => point.count))

  return (
    <figure className="mt-8">
      <figcaption className="text-[14px] font-medium text-[#233A4A]">{label}</figcaption>
      <div className="mt-4 flex h-36 items-end gap-1" role="img" aria-label={label}>
        {points.map((point) => (
          <div key={point.date} className="flex min-w-0 flex-1 flex-col items-center justify-end">
            <div
              className="w-full rounded-t-[3px] bg-[#05AAFF]"
              style={{ height: `${Math.max(point.count === 0 ? 2 : (point.count / max) * 100, 2)}%` }}
              title={`${point.date}: ${point.count}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[12px] text-[#6C7881]">
        <span>{points[0]?.date}</span>
        <span>{points[points.length - 1]?.date}</span>
      </div>
    </figure>
  )
}
