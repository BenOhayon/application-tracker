import type { WithId } from "../utils/types";
import type { DataModel } from "./data-model-base";

export class LocalStorageModel<T extends WithId> implements DataModel<T> {
  private storageKey = `application_tracker_data`;

  createRecord = (record: T) => {
    const records = this.readAllRecords();
    const id = Date.now().toString();
    records.push({ ...record, id } as T);
    localStorage.setItem(this.storageKey, JSON.stringify(records));
  };

  readRecord = (id: string) => {
    return this.readAllRecords().find((r) => r.id === id) as T;
  };

  updateRecord = (id: string, updatedRecord: T) => {
    const records = this.readAllRecords();
    const index = records.findIndex((r) => r.id === id);
    if (index !== -1) {
      records[index] = updatedRecord;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(records));
  };

  deleteRecord = (id: string) => {
    const records = this.readAllRecords();
    const index = records.findIndex((r) => r.id === id);
    if (index !== -1) {
      records.splice(index, 1);
    }
    localStorage.setItem(this.storageKey, JSON.stringify(records));
  };

  readAllRecords = (): T[] => {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  };
}