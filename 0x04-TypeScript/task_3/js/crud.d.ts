import { RowID, RowElement } from "./interface";

interface insertRowInterface {
  (row: RowElement): number;
}

interface deleteRowInterface {
  (rowId: RowID): void;
}

interface updateRowInterface {
  (rowId: RowID, row: RowElement): RowID;
}