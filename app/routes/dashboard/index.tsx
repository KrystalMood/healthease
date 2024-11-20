<<<<<<< HEAD
import { LoaderFunction } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
=======
import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { BarChart2, List, FileText } from "lucide-react";
import { appointments, stats } from "~/data/dashboard";
import DashboardLayout from "~/components/dashboard/layout";
import StatsCard from "~/components/dashboard/stats-card";
import ActivityChart from "~/components/dashboard/activity-chart";
import AppointmentList from "~/components/dashboard/appointment-list";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard | HealthEase" },
    { name: "description", content: "" },
    { property: "og:title", content: "Dashboard | HealthEase" },
    { property: "og:description", content: "" },
    { property: "twitter:title", content: "Dashboard | HealthEase" },
    { property: "twitter:description", content: "" },
  ];
};
>>>>>>> da83bbcf7c8fce9888591793fc6c09fddfb6e81f

export default function Dashboard() {
  return (
    <>
      <Outlet />
<<<<<<< HEAD
    </>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === "/dashboard") return redirect("/dashboard/beranda");
  return null;
};
=======
      <DashboardLayout>
        <div className="space-y-6">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50" aria-label="Export data">
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600" aria-label="Filter data">
                <List className="h-4 w-4" aria-hidden="true" />
                <span>Filter</span>
              </button>
            </div>
          </header>
          <section aria-labelledby="stats-section-title" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <h2 id="stats-section-title" className="sr-only">
              Statistik
            </h2>
            {stats.map((stat) => <StatsCard key={stat.title} {...stat} />)}
          </section>
          <section className="grid gap-6 lg:grid-cols-2">
            <article aria-labelledby="activity-title" className="border-b border-gray-200 bg-white p-4">
              <header className="flex items-center justify-between">
                <h2 id="activity-title" className="text-lg font-semibold text-gray-900">
                  Aktivitas Konsultasi
                </h2>
                <button className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700" aria-label="Lihat detail aktivitas konsultasi">
                  Lihat Detail
                  <BarChart2 className="ml-2 h-4 w-4" aria-hidden="true" />
                </button>
              </header>
              <div className="p-6">
                <ActivityChart />
              </div>
            </article>
            <article aria-labelledby="schedule-title" className="rounded-lg border border-gray-200 bg-white p-6">
              <header className="mb-4 flex items-center justify-between">
                <h2 id="schedule-title" className="text-lg font-semibold text-gray-900">
                  Jadwal Konsultasi
                </h2>
                <button className="text-sm text-emerald-600 hover:text-emerald-700" aria-label="Lihat semua jadwal konsultasi">
                  Lihat Semua
                </button>
              </header>
              <AppointmentList appointments={appointments} />
            </article>
          </section>
        </div>
      </DashboardLayout>
    </>
  );
}
>>>>>>> da83bbcf7c8fce9888591793fc6c09fddfb6e81f
