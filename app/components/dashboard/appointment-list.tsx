import { Calendar, Clock } from "lucide-react";

interface Appointment {
  id: number;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: string;
}

interface AppointmentListProps {
  appointments: Appointment[];
}

export default function AppointmentList({ appointments }: AppointmentListProps) {
  return (
    <div className="divide-y divide-gray-200">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
              <p className="text-sm text-gray-500">{appointment.specialty}</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
              {appointment.status}
            </span>
          </div>
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              {new Date(appointment.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1.5 h-4 w-4" />
              {appointment.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 