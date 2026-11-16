import type { ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import "./photo-slot.css";

type PhotoSlotProps = {
  slot: string;
  className?: string;
  reveal?: boolean;
};

export const PhotoSlot = ({
  slot,
  className = "",
  reveal = true,
}: PhotoSlotProps): ReactElement => {
  const classes = `ph ${className}`.trim();

  if (reveal) {
    return (
      <Reveal as="div" variant="mask" className={classes} data-slot={slot}>
        <i aria-hidden="true" />
      </Reveal>
    );
  }

  return (
    <div className={classes} data-slot={slot}>
      <i aria-hidden="true" />
    </div>
  );
};
