import type { UseFormRegisterReturn } from "react-hook-form";

type TextareaFieldProps = {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  className: string;
  error?: string;
  placeholder?: string;
  hint?: string;
  rows?: number;
};

export function TextareaField({
  id,
  label,
  registration,
  className,
  error,
  placeholder,
  hint,
  rows = 4,
}: TextareaFieldProps) {
  const errorId = `${id}-error`;

  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-brand-ink/70">{label}</span>
      <textarea
        {...registration}
        id={id}
        rows={rows}
        className={className}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {hint && <span className="text-sm font-medium text-brand-ink/70">{hint}</span>}
      {error && (
        <span id={errorId} className="text-sm text-red-500">
          {error}
        </span>
      )}
    </label>
  );
}
