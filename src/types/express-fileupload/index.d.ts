declare namespace Express {
  interface FileObject {
    [index: string]: {
      mv: (path: string) => Promise<any>;
      name: string;
    }
  }

  export interface Request {
      files: FileObject;
  }
}