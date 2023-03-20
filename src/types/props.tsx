export type HeaderSectionProps = {
  variant: "light" | "dark";
};

/* FillerProps can only have either height or width but must have one of them */
export type FillerProps = {
  height?: number;
  width?: number;
} & ({ height: number; width?: never } | { width: number; height?: never });
