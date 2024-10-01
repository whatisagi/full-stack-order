import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductTableProps {
  products: {
    [key: string]: number;
  };
}

export function ProductTable({ products }: ProductTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Number.</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(products).map((key, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{key}</TableCell>
            <TableCell>{products[key]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
