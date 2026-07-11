type Props = {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
};

export default function TextInput({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
}: Props) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-white/60">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
      />

    </div>
  );
}