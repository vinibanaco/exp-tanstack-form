import { useFieldContext } from ".";

import Field from "./field";

export default function TextField({ label }: { label: string }) {
  const field = useFieldContext<string>();

  return (
    <Field label={label}>
      <input
        value={field.state.value}
        onChange={(event) => field.handleChange(event.target.value)}
      />
    </Field>
  );
}
