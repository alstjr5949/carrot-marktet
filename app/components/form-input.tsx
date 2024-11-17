interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors = [],
  name,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="w-full h-10 bg-transparent rounded-md p-2 focus:outline-none transition ring-1 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
        name={name}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
