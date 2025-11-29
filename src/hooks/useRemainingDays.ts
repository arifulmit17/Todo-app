export function useRemainingDays(targetDate?: string | undefined) {
  if (!targetDate) return null;

  const remainingDays = targetDate
    ? Math.ceil(
        (new Date(targetDate).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : null;
  return remainingDays;
}