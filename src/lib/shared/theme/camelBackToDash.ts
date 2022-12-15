export function camelBackToDash(camelBack: string): string {
  return camelBack.replaceAll(/[A-Z]/g, '-$&').trim().toLowerCase();
}
