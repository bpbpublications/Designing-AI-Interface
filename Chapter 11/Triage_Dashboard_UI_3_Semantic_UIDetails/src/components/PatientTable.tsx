import { SeverityIndicator, SeverityLevel } from "./SeverityIndicator";
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
              <TableHead>Severity</TableHead>
              <TableHead>Arrival Time</TableHead>
              <TableHead>Room</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.condition}</TableCell>
                <TableCell>
                  <SeverityIndicator level={patient.severity} />
                </TableCell>
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