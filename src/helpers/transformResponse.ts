export function transformResponse(data: unknown): unknown {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (e) {
      // do nothing
    }
  }
  return data;
}
