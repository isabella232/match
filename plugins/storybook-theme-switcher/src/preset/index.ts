/* eslint-disable unicorn/prefer-module */
export function managerEntries(entry: any[] = []): any[] {
  return [...entry, require.resolve("../register")];
}

export function config(entry: any[] = []): any[] {
  return [...entry, require.resolve("./add-decorator")];
}
/* eslint-enable unicorn/prefer-module */
