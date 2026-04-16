import type { WithId } from "../utils/types";
import type { DataModel } from "./data-model-base";
import { LocalStorageModel } from "./LocalStorageModel";

export class Repository<T extends WithId> implements DataModel<T> {
  private dataModel = new LocalStorageModel<T>();

  createRecord = (record: T) => {
    this.dataModel.createRecord(record);
  };

  readAllRecords = () => this.dataModel.readAllRecords();

  readRecord = (id: string) => {
    const record = this.dataModel.readRecord(id);
    if (!record) throw new Error(`Record with id ${id} not found`);
    return record;
  };

  updateRecord = (id: string, updatedRecord: T) => {
    this.dataModel.updateRecord(id, updatedRecord);
  };

  deleteRecord = (id: string) => {
    this.dataModel.deleteRecord(id);
  };
}