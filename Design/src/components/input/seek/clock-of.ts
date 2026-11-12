/** `83` reads `1:23`. */
export const clockOf = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const rest = String(Math.floor(seconds % 60)).padStart(2, '0');

  return `${minutes}:${rest}`;
};
