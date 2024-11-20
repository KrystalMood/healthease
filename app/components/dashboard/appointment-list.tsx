import { Calendar, Clock } from "lucide-react";

interface AppointmentListProps {
  appointments: {
    id: number;
    doctor: string;
    specialty: string;
    date: string;
    time: string;
    status: string;
  }[];
}

export default function AppointmentList({ appointments }: AppointmentListProps) {
  return (
    <section aria-labelledby="appointments-heading" className="divide-y divide-gray-200">
      <h2 id="appointments-heading" className="sr-only">
        Appointments
      </h2>
      {appointments.map(({ id, doctor, specialty, date, time, status }) => (
        <article key={id} className="py-4">
          <header className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{doctor}</h3>
              <p className="text-sm text-gray-500">{specialty}</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800" aria-label={`Status: ${status}`}>
              {status}
            </span>
          </header>
          <dl className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" aria-hidden="true" />
              <dt className="sr-only">Date</dt>
              <dd>{new Date(date).toLocaleDateString()}</dd>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1.5 h-4 w-4" aria-hidden="true" />
              <dt className="sr-only">Time</dt>
              <dd>{time}</dd>
            </div>
          </dl>
        </article>
      ))}
    </section>
  );
}