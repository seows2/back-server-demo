const cache: Record<string, any> = {};

export const loadCache = <T>(key: string): T => {
  return cache[key];
};

export const saveCache = <T>(key: string, value: T): T => {
  cache[key] = value;
  return value;
};
