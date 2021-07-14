export interface AppError extends Error {
  status?: number;
  appMsg?: string;
}

export const error = (
  msg: string,
  status?: number,
  extErr?: AppError,
): AppError => {
  if (extErr) {
    extErr.appMsg = msg;
    extErr.status = status;
    return extErr;
  }
  const err: AppError = new Error();
  err.appMsg = msg;
  err.status = status;
  return err;
};
