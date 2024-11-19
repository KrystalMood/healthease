import {
  Calendar,
  Users,
  Activity,
  Clock,
  BarChart2,
  List,
  FileText,
} from "lucide-react";
import DashboardLayout from "~/components/dashboard/layout";
import StatsCard from "~/components/dashboard/stats-card";
import AppointmentList from "~/components/dashboard/appointment-list";
import ActivityChart from "~/components/dashboard/activity-chart";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Konsultasi",
      value: "24",
      icon: Calendar,
      trend: { value: 12, isPositive: true },
    },
    {
      title: "Dokter Aktif",
      value: "8",
      icon: Users,
    },
    {
      title: "Tingkat Kepuasan",
      value: "92%",
      icon: Activity,
      trend: { value: 3, isPositive: true },
    },
    {
      title: "Waktu Respons",
      value: "< 5 min",
      icon: Clock,
      trend: { value: 10, isPositive: true },
    },
  ];

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Budi Santoso",
      specialty: "Dokter Jantung",
      date: "2024-03-20",
      time: "09:00",
      status: "akan datang",
    },
    {
      id: 2,
      doctor: "Dr. Siti Rahmawati",
      specialty: "Dokter Anak",
      date: "2024-03-21",
      time: "14:30",
      status: "akan datang",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
              <FileText className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button className="flex items-center space-x-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
              <List className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border-b border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Aktivitas Konsultasi
              </h2>
              <button className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700">
                Lihat Detail
                <BarChart2 className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="p-6">
              <ActivityChart />
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Jadwal Konsultasi
              </h2>
              <button className="text-sm text-emerald-600 hover:text-emerald-700">
                Lihat Semua
              </button>
            </div>
            <AppointmentList appointments={appointments} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
