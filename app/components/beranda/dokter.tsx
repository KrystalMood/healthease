import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DaftarDokter from "~/components/beranda/daftar-dokter";
import { DataDokter } from "~/data/beranda";

export default function Dokter() {
  const [startIndex, setStartIndex] = useState<number>(0);
  const itemsPerPage = 5;
  const maxIndex = DataDokter().length - itemsPerPage;
  const currentDoctors = DataDokter().slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const changeIndex = (increment: boolean) =>
    setStartIndex((prev) =>
      Math.min(
        maxIndex,
        Math.max(0, prev + (increment ? itemsPerPage : -itemsPerPage)),
      ),
    );

  return (
    <main className="min-h-screen px-4 py-16">
      <div className="mx-auto w-[90%] space-y-12">
        <section
          className="relative flex justify-center gap-4"
          aria-labelledby="doctor-carousel"
        >
          <h2 id="doctor-carousel" className="sr-only">
            Carousel Daftar Dokter
          </h2>
          <CarouselButton
            disabled={startIndex === 0}
            onClick={() => changeIndex(false)}
            icon={ChevronLeft}
            label="Sebelumnya"
          />
          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            role="list"
          >
            {currentDoctors.map((doctor) => (
              <DaftarDokter key={doctor.id} {...doctor} />
            ))}
          </div>
          <CarouselButton
            disabled={startIndex >= maxIndex}
            onClick={() => changeIndex(true)}
            icon={ChevronRight}
            label="Berikutnya"
          />
        </section>
        <PaginationStatus
          startIndex={startIndex}
          itemsPerPage={itemsPerPage}
          totalItems={DataDokter().length}
        />
        <Legend />
      </div>
    </main>
  );
}

const CarouselButton = ({
  disabled,
  onClick,
  icon: Icon,
  label,
}: {
  disabled: boolean;
  onClick: () => void;
  icon: typeof ChevronLeft;
  label: string;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`my-auto h-fit rounded-full bg-white p-2 shadow-lg transition-opacity ${
      disabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"
    }`}
    aria-label={label}
  >
    <Icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
  </button>
);

const PaginationStatus = ({
  startIndex,
  itemsPerPage,
  totalItems,
}: {
  startIndex: number;
  itemsPerPage: number;
  totalItems: number;
}) => (
  <p className="cursor-default text-center text-gray-600">
    Menampilkan {startIndex + 1}-
    {Math.min(startIndex + itemsPerPage, totalItems)} dari {totalItems} dokter
  </p>
);

const Legend = () => (
  <section
    className="flex flex-col justify-center gap-0 text-lg text-gray-600 lg:flex-row lg:gap-8"
    aria-labelledby="status-legend"
  >
    <h3 id="status-legend" className="sr-only">
      Keterangan Status
    </h3>
    <LegendItem
      color="bg-emerald-600"
      label="Tersedia untuk konsultasi online"
    />
    <LegendItem color="bg-emerald-200" label="Jadwal penuh" />
  </section>
);

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex cursor-default items-center gap-2">
    <span className={`h-3 w-3 rounded-full ${color}`} />
    <span>{label}</span>
  </div>
);
