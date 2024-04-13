export function validFields(data) {
  for (const field of Object.values(data)) {
    if (!field) {
      return false;
    }
  }
  return true;
}
