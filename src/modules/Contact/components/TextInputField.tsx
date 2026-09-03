import type { HTMLInputTypeAttribute } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type TextInputFieldProps = {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  className: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: string;
};

export function TextInputField({
  id,
  label,
  registration,
  className,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: TextInputFieldProps) {
  const errorId = `${id}-error`;

  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-brand-ink/70">{label}</span>
      <input
        {...registration}
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <span id={errorId} className="text-sm text-red-500">
          {error}
        </span>
      )}
    </label>
  );
}
