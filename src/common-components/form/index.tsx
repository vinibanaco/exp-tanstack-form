import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

import Button from "./button";
import TextField from "./text-field";
import NumberField from "./number-field";

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

const { useAppForm } = createFormHook({
  formContext,
  fieldContext,
  formComponents: {
    Button,
  },
  fieldComponents: {
    TextField,
    NumberField,
  },
});

export { useAppForm, useFieldContext, useFormContext };
