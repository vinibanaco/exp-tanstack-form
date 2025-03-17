import { z } from "zod";

import { useAppForm } from "./common-components/form";

export default function App() {
  const form = useAppForm({
    defaultValues: {
      username: "",
      age: 0,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      onReset={(e) => {
        e.preventDefault();
        form.reset();
      }}
    >
      <form.AppField
        name="username"
        children={(field) => <field.TextField label="Full Name" />}
        validators={{ onChange: z.string().trim().nonempty() }}
      />
      <form.AppField
        name="age"
        children={(field) => <field.NumberField label="Age" />}
        validators={{ onChange: z.number().min(13) }}
      />

      <br />
      <br />
      <form.AppForm>
        <form.Button type="reset">Clear</form.Button>
      </form.AppForm>
      <form.AppForm>
        <form.Button type="submit">Submit</form.Button>
      </form.AppForm>
    </form>
  );
}
