import { useFieldContext } from ".";

export default function CheckboxField({ label }: { label: string }) {
  const field = useFieldContext<boolean>();

  return (
    <label>
      <input
        type="checkbox"
        checked={field.state.value}
        onChange={(event) => field.handleChange(event.target.checked)}
      />
      {label}
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
