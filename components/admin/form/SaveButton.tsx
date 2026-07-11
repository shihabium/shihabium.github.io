type Props = {
  text?: string;
  onClick?: () => void;
};

export default function SaveButton({
  text = "Save Changes",
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/30"
    >
      {text}
    </button>
  );
}