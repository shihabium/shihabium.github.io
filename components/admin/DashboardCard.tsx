type Props = {
  title: string;
  value: string;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl hover:shadow-violet-500/20">

      <div
        className={`mb-5 inline-flex rounded-2xl px-4 py-2 text-sm font-semibold ${color}`}
      >
        {title}
      </div>

      <h2 className="text-5xl font-black">
        {value}
      </h2>

    </div>
  );
}