import type { ReactElement } from "react";
import "./brand-mark.css";

type BrandMarkProps = {
  href?: string;
  ariaLabel: string;
  className?: string;
};

export const BrandMark = ({
  href = "#top",
  ariaLabel,
  className = "",
}: BrandMarkProps): ReactElement => (
  <a className={`mark ${className}`.trim()} href={href} aria-label={ariaLabel}>
    Hudson<b>.</b>Cuts
  </a>
);
