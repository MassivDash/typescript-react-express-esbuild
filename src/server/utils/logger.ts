/* eslint-disable no-console */

export const logInfo = (...args: any[]): void => {
  console.log(args);
};

export const logError = (...args: any[]): void => {
  console.error(args);
};

export const logWarn = (...args: any[]): void => {
  console.warn(args);
};
