import { z } from "zod";

import { useFormValues } from "..";
import { useAppForm } from "../../../common-components/form";

const defaultValues = {
  password: "",
  passwordConfirmation: "",
  rememberMe: false,
};

export type Step2FormValues = typeof defaultValues;

export default function Step2() {
  const { formValues } = useFormValues();

  const form = useAppForm({
    defaultValues: {
      ...defaultValues,
      password: formValues.password,
      passwordConfirmation: formValues.passwordConfirmation,
      rememberMe: formValues.rememberMe,
    },
    onSubmit: async ({ value }) => {
      const newFormValues = {
        ...formValues,
        ...value,
      };

      console.log(newFormValues);
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
        name="password"
        children={(field) => <field.PasswordField label="Password" />}
        validators={{
          onChange: z
            .string()
            .min(8)
            .regex(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              "Must contain uppercase and lowercase letters, numbers and special characters"
            ),
        }}
      />
      <form.AppField
        name="passwordConfirmation"
        children={(field) => (
          <field.PasswordField label="Confirm your password" />
        )}
        validators={{
          onChangeListenTo: ["password"],
          onChange: ({ value, fieldApi }) => {
            if (value !== fieldApi.form.getFieldValue("password")) {
              return "Passwords don't match";
            }
            return undefined;
          },
        }}
      />
      <br />
      <br />
      <form.AppField
        name="rememberMe"
        children={(field) => <field.CheckboxField label="Remember me" />}
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
