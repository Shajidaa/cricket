
export default function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex border-b border-gray-50 py-3 text-sm md:text-base">
      <span className="w-5/12 md:w-1/3 font-bold text-gray-900">{label}</span>
      <span className="w-7/12 md:w-2/3 text-gray-600">{value}</span>
    </div>
  )
}