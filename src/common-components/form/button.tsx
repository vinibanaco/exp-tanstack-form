import { type ButtonHTMLAttributes } from "react";
import { useStore } from "@tanstack/react-form";

import { useFormContext } from ".";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const form = useFormContext();
  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  return <button disabled={isSubmitting} {...props} />;
}
