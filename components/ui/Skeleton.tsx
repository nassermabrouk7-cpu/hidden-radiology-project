export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-brand-border rounded ${className || ''}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}