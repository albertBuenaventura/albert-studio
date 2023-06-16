import React from "react";

export type StorybookThemeContainerProps = {
  children: React.ReactNode;
};

export default function StorybookThemeContainer({
  children,
}: StorybookThemeContainerProps) {
  return (
    <div className="flex flex-col gap-y-7">
      <div className="dark">
        <div>Dark</div>
        {children}
      </div>
      <div>
        <div>Light</div>
        {children}
      </div>
    </div>
  );
}
