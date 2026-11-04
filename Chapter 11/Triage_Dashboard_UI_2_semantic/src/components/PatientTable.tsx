import { SeverityLevel } from "./SeverityIndicator";
import { StatusDot } from "./StatusDot";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export interface Patient {
  id: string;
  name: string;
  condition: string;
  severity: SeverityLevel;
  arrivalTime: string;
  age: number;
  roomNumber?: string;
}

interface PatientTableProps {
  patients: Patient[];
}

export function PatientTable({ patients }: PatientTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Patients</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Arrival Time</TableHead>
              <TableHead>Room</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <div className="patient-info-with-severity flex items-center gap-3" data-severity={patient.severity} data-patient-priority={patient.severity}>
                    <StatusDot level={patient.severity} />
                    <span>{patient.name}</span>
                  </div>
                </TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>{patient.arrivalTime}</TableCell>
                <TableCell>
                  {patient.roomNumber ? (
                    <Badge variant="outline">{patient.roomNumber}</Badge>
                  ) : (
                    <span className="text-muted-foreground">Waiting</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}