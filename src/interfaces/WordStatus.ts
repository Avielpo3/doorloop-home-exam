export interface WordProperties {
  word: string;
  wordStatus: WordStatus;
  inputValue: string | undefined;
}

export enum WordStatus {
  Normal,
  Match,
  Mismatch,
  Current,
}
