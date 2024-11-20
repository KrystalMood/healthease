interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({ title, value, icon: Icon, trend }: StatsCardProps): JSX.Element {
  return (
    <section className="relative rounded-lg bg-white p-6 shadow-sm" aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}>
      <header className="flex items-center justify-between">
        <div>
          <h2 id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`} className="text-sm font-medium text-gray-600">
            {title}
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p
              className={`mt-2 text-sm ${trend.isPositive ? "text-emerald-600" : "text-red-600"}`}
              aria-label={`Trend ${trend.isPositive ? "positive" : "negative"} ${trend.value}%`}
            >
              {trend.isPositive ? "↑" : "↓"} {trend.value}%
            </p>
          )}
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-emerald-100 p-3" aria-hidden="true">
          <Icon className="h-6 w-6 text-emerald-600" />
        </div>
      </header>
    </section>
  );
}