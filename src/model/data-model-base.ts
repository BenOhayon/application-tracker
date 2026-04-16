export interface DataModel<T extends object> {
  createRecord: (record: T) => void;
  readAllRecords: () => T[];
  readRecord: (id: string) => T;
  updateRecord: (id: string, updatedRecord: T) => void;
  deleteRecord: (id: string) => void;
}