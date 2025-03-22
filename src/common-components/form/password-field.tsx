import { useFieldContext } from ".";

import Field from "./field";

export default function PasswordField({ label }: { label: string }) {
  const field = useFieldContext<string>();

  return (
    <Field label={label}>
      <input
        type="password"
        value={field.state.value}
        onChange={(event) => field.handleChange(event.target.value)}
      />
    </Field>
  );
}
