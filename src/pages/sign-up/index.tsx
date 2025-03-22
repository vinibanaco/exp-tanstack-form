import { useState } from "react";
import { Outlet, useOutletContext } from "react-router";

import Navbar from "../../common-components/navbar";

import { type Step1FormValues } from "./step-1";
import { type Step2FormValues } from "./step-2";

export type FormValues = Step1FormValues & Step2FormValues;

type FormValuesContext = {
  formValues: Partial<FormValues>;
  addFormValues: (newValues: Partial<FormValues>) => void;
};

export function useFormValues() {
  return useOutletContext<FormValuesContext>();
}

export default function SignUp() {
  const [formValues, setFormValues] = useState<Partial<FormValues>>({});

  const addFormValues = (newValues: Partial<FormValues>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  return (
    <div>
      <Navbar />
      <hr style={{ marginBottom: "2rem" }} />

      <Outlet
        context={{ formValues, addFormValues } satisfies FormValuesContext}
      />
    </div>
  );
}
