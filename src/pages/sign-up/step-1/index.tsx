import { useNavigate } from "react-router";
import { z } from "zod";

import { useFormValues } from "..";
import { useAppForm } from "../../../common-components/form";
import { ROUTES } from "../../../modules/routing/enums";

const defaultValues = {
  username: "",
  age: 0,
};

export type Step1FormValues = typeof defaultValues;

export default function Step1() {
  const navigate = useNavigate();
  const { formValues, addFormValues } = useFormValues();

  const form = useAppForm({
    defaultValues: {
      ...defaultValues,
      age: formValues.age,
      username: formValues.username,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      addFormValues(value);
      navigate(ROUTES.SIGN_UP.STEP_2);
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
