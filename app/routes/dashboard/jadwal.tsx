import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
} from "lucide-react";
import DashboardLayout from "~/components/dashboard/layout";

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
  {
    id: 3,
    doctor: "Dr. Ahmad Wijaya",
    specialty: "Dokter Umum",
    date: "2024-03-22",
    time: "10:15",
    status: "akan datang",
  },
  {
    id: 4,
    doctor: "Dr. Maya Putri",
    specialty: "Dokter Gigi",
    date: "2024-03-23",
    time: "13:00",
    status: "akan datang",
  },
  {
    id: 5,
    doctor: "Dr. Rudi Hartanto",
    specialty: "Dokter Syaraf",
    date: "2024-03-24",
    time: "11:30",
    status: "akan datang",
  },
];

export default function JadwalKonsultasi() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Jadwal Konsultasi
          </h1>
        </header>
        <section className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <select className="rounded-lg border border-gray-200 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" aria-label="Filter berdasarkan spesialisasi">
              <option value="">Semua Spesialis</option>
              <option value="jantung">Dokter Jantung</option>
              <option value="anak">Dokter Anak</option>
              <option value="umum">Dokter Umum</option>
              <option value="gigi">Dokter Gigi</option>
              <option value="syaraf">Dokter Syaraf</option>
            </select>
            <select className="rounded-lg border border-gray-200 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" aria-label="Filter berdasarkan status jadwal">
              <option value="">Semua Status</option>
              <option value="akan-datang">Akan Datang</option>
              <option value="selesai">Selesai</option>
              <option value="dibatalkan">Dibatalkan</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Cari jadwal..."
              className="w-64 rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              aria-label="Cari jadwal konsultasi"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
          </div>
        </section>
        <section className="rounded-lg border border-gray-200 bg-white">
          <div className="grid grid-cols-5 gap-4 border-b border-gray-200 px-6 py-3 font-medium text-gray-500">
            <span>Dokter</span>
            <span>Spesialisasi</span>
            <span>Tanggal</span>
            <span>Waktu</span>
            <span>Status</span>
          </div>
          <div className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50">
                <div className="font-medium text-gray-900">
                  {appointment.doctor}
                </div>
                <div className="text-gray-500">{appointment.specialty}</div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                  {new Date(appointment.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="mr-2 h-4 w-4" aria-hidden="true" />
                  {appointment.time}
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <nav className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6" aria-label="Pagination">
          <div className="flex flex-1 justify-between sm:hidden">
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <h5 className="text-sm text-gray-700">
              Menampilkan <span className="font-medium">1</span> sampai{" "}
              <span className="font-medium">5</span> dari{" "}
              <span className="font-medium">20</span> jadwal
            </h5>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
              <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" aria-label="Previous page">
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-emerald-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                1
              </button>
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                2
              </button>
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                3
              </button>
              <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" aria-label="Next page">
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </nav>
      </div>
    </DashboardLayout>
  );
}