export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
  showSnackBar?: boolean;
}

export type EntryStatus = "pending" | "in-progress" | "finished";
