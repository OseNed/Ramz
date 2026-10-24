type LogoMarkProps = {
  /** Ring and three-square colour: black on light surfaces, white on navy. */
  color?: string;
};

export function LogoMark({ color = "#000" }: LogoMarkProps) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="27" fill="none" stroke={color} strokeWidth="5" />
      <rect x="20" y="20" width="10" height="10" rx="3" fill={color} />
      <rect x="34" y="20" width="10" height="10" rx="3" fill="#494fdf" />
      <rect x="20" y="34" width="10" height="10" rx="3" fill={color} />
      <rect x="34" y="34" width="10" height="10" rx="3" fill={color} />
    </svg>
  );
}

/** Ramz wordmark: ring mark + lowercase "ramz" in the display face. */
export function Logo({ color }: LogoMarkProps) {
  return (
    <>
      <LogoMark color={color} />
      <span>ramz</span>
    </>
  );
}
