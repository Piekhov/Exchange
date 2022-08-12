export interface ICurrency {
    [mainCurr: string]: {
        [subCurr: string]: string;
      };
}