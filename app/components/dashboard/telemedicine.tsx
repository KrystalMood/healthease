import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Telemedicine() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Budi Santoso",
      specialty: "Dokter Umum",
      schedule: [
        { day: "Senin", time: "09:00 - 12:00" },
        { day: "Rabu", time: "13:00 - 16:00" },
      ],
    },
    {
      id: 2,
      name: "Dr. Maya Putri",
      specialty: "Dokter Gigi",
      schedule: [
        { day: "Selasa", time: "10:00 - 14:00" },
        { day: "Kamis", time: "13:00 - 17:00" },
      ],
    },
    {
      id: 3,
      name: "Dr. Ahmad Wijaya",
      specialty: "Dokter Mata",
      schedule: [
        { day: "Senin", time: "14:00 - 17:00" },
        { day: "Jumat", time: "09:00 - 13:00" },
      ],
    },
  ];

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Telemedicine</h1>
      </div>

      <div className="flex items-center space-x-4">
        <select className="rounded-lg border border-gray-200 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500">
          <option value="">Pilih Poli</option>
          <option value="umum">Poli Umum</option>
          <option value="gigi">Poli Gigi</option>
          <option value="mata">Poli Mata</option>
        </select>

        <input
          type="date"
          className="rounded-lg border border-gray-200 px-4 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="grid grid-cols-4 gap-4 border-b border-gray-200 px-6 py-3 font-medium text-gray-500">
          <span>Dokter</span>
          <span>Spesialisasi</span>
          <span>Jadwal Praktik</span>
          <span>Aksi</span>
        </div>

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50"
          >
            <div className="font-medium text-gray-900">{doctor.name}</div>
            <div className="text-gray-500">{doctor.specialty}</div>
            <div className="text-gray-500">
              {doctor.schedule.map((schedule, index) => (
                <div key={index}>
                  {schedule.day}: {schedule.time}
                </div>
              ))}
            </div>
            <div>
              <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
                Buat Janji
              </button>
            </div>
          </div>
        ))}
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
    </main>
  );
}
