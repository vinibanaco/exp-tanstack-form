import type { PropsWithChildren } from "react";

import { useFieldContext } from ".";

export default function Field({
  label,
  children,
}: PropsWithChildren<{ label: string }>) {
  const field = useFieldContext();

  return (
    <label>
      <div>{label}</div>
      {children}
      {field.state.meta.isDirty
        ? field.state.meta.errors.map((error, index) => (
            <span key={index}>
              {typeof error === "string"
                ? error
                : "message" in error
                ? error.message
                : "Error"}
            </span>
          ))
        : null}
    </label>
  );
}
