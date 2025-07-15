import { Timestamp } from "firebase/firestore";

export type Memo = {
  id: string;
  content: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
