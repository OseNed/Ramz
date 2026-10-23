type LogoProps = {
  className?: string;
  mark?: boolean;
};

/** Ramz wordmark: dotted-ring mark + lowercase wordmark, from the brand deck. */
export function Logo({ className, mark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      {mark && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth="5" />
          <rect x="20" y="20" width="10" height="10" rx="3" fill="currentColor" />
          <rect x="34" y="20" width="10" height="10" rx="3" fill="#494FDF" />
          <rect x="20" y="34" width="10" height="10" rx="3" fill="currentColor" />
          <rect x="34" y="34" width="10" height="10" rx="3" fill="currentColor" />
        </svg>
      )}
      <span className="text-[1.0625rem] font-medium tracking-[-0.01em]">ramz</span>
    </span>
  );
}
