import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const students = [
  {
    id: "1",
    name: "Etudiant 1",
    phone: "05 55 55 55 55",
    email: "jerome@google.com",
    specialite: "CEM",
  },
  {
    id: "2",
    name: "Etudiant 2",
    phone: "05 55 55 55 55",
    email: "jerome@google.com",
    specialite: "CEM",
  },
  {
    id: "3",
    name: "Etudiant 3",
    phone: "05 55 55 55 55",
    email: "jerome@google.com",
    specialite: "CEM",
  },
];

export default function page({ params }) {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/d/teacher/sessions">Sessions</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/d/teacher/sessions/${params.slug}`}>
              Session {params.slug}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Group {params.group_id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <hr className="my-6" />
      <Table>
        <TableCaption>La liste des etudiants.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Nom et prénom</TableHead>
            <TableHead>Numero de telephone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Etablissement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className="text-right">{item.specialite}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
