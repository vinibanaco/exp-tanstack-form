import { useFieldContext } from ".";

import Field from "./field";

export default function NumberField({ label }: { label: string }) {
  const field = useFieldContext<number>();

  return (
    <Field label={label}>
      <input
        type="number"
        value={field.state.value}
        onChange={(event) => field.handleChange(event.target.valueAsNumber)}
      />
    </Field>
  );
}
