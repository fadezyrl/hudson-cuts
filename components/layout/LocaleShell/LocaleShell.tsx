"use client";

import { useEffect, type ReactElement, type ReactNode } from "react";
import { useLocale } from "@/context/LocaleContext";

type LocaleShellProps = {
  children: ReactNode;
};

export const LocaleShell = ({ children }: LocaleShellProps): ReactElement => {
  const { dir, locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "UR" ? "ur" : "en";
    document.documentElement.dir = dir;
  }, [dir, locale]);

  return <>{children}</>;
};
