import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function SectionCard({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-white/50">
            {description}
          </p>
        )}

      </div>

      <div className="space-y-6">
        {children}
      </div>

    </div>
  );
}