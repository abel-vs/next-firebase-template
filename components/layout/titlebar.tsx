export default function TitleBar({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex w-full justify-between bg-stone-50 px-4 pt-2 pb-3 shadow-sm">
      <div>
        <h1 className="text-lg font-bold text-stone-800">{title}</h1>
        <h2 className="text-xs font-medium text-stone-400">{subtitle}</h2>
      </div>
      {children}
    </div>
  );
}
