import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EntriesPageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EntriesPage {
  readonly id: string;
  readonly entryTitle?: string | null;
  readonly entryDate?: string | null;
  readonly entrySentence?: string | null;
  readonly entryImageURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EntriesPage, EntriesPageMetaData>);
  static copyOf(source: EntriesPage, mutator: (draft: MutableModel<EntriesPage, EntriesPageMetaData>) => MutableModel<EntriesPage, EntriesPageMetaData> | void): EntriesPage;
}