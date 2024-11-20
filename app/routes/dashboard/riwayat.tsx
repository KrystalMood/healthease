import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Search,
} from "lucide-react";
import DashboardLayout from "~/components/dashboard/layout";

const consultationHistory = [
  {
    id: 1,
    doctor: "Dr. Budi Santoso",
    specialty: "Dokter Jantung",
    date: "2024-02-15",
    time: "09:00",
    status: "selesai",
    notes: "Pemeriksaan rutin tekanan darah dan EKG",
  },
  {
    id: 2,
    doctor: "Dr. Siti Rahmawati",
    specialty: "Dokter Anak",
    date: "2024-02-10",
    time: "14:30",
    status: "selesai",
    notes: "Vaksinasi dan pemeriksaan tumbuh kembang",
  },
  {
    id: 3,
    doctor: "Dr. Ahmad Wijaya",
    specialty: "Dokter Umum",
    date: "2024-02-05",
    time: "10:15",
    status: "dibatalkan",
    notes: "Konsultasi gejala flu dan demam",
  },
  {
    id: 4,
    doctor: "Dr. Maya Putri",
    specialty: "Dokter Gigi",
    date: "2024-01-28",
    time: "13:00",
    status: "selesai",
    notes: "Pembersihan karang gigi dan pemeriksaan rutin",
  },
];

export default function Riwayat() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Riwayat Konsultasi
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <select className="rounded-lg border border-gray-200 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
              <option value="">Semua Spesialis</option>
              <option value="jantung">Dokter Jantung</option>
              <option value="anak">Dokter Anak</option>
              <option value="umum">Dokter Umum</option>
              <option value="gigi">Dokter Gigi</option>
              <option value="syaraf">Dokter Syaraf</option>
            </select>

            <select className="rounded-lg border border-gray-200 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
              <option value="">Semua Status</option>
              <option value="selesai">Selesai</option>
              <option value="dibatalkan">Dibatalkan</option>
            </select>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Cari riwayat..."
              className="w-64 rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="grid grid-cols-6 gap-4 border-b border-gray-200 px-6 py-3 font-medium text-gray-500">
            <div>Dokter</div>
            <div>Spesialisasi</div>
            <div>Tanggal</div>
            <div>Waktu</div>
            <div>Status</div>
            <div>Catatan</div>
          </div>

          <div className="divide-y divide-gray-200">
            {consultationHistory.map((consultation) => (
              <div
                key={consultation.id}
                className="grid grid-cols-6 gap-4 px-6 py-4 hover:bg-gray-50"
              >
                <div className="inline-flex items-center font-medium text-gray-900">
                  {consultation.doctor}
                </div>
                <div className="inline-flex items-center text-gray-500">
                  {consultation.specialty}
                </div>
                <div className="inline-flex items-center text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(consultation.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="mr-2 h-4 w-4" />
                  {consultation.time}
                </div>
                <div className="inline-flex items-center">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      consultation.status === "selesai"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {consultation.status}
                  </span>
                </div>
                <div className="text-gray-500">{consultation.notes}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Menampilkan <span className="font-medium">1</span> sampai{" "}
                <span className="font-medium">5</span> dari{" "}
                <span className="font-medium">20</span> jadwal
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Previous</span>
                  <ChevronLeft className="h-5 w-5" />
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
                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
