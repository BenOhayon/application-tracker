interface Unit {
  unit: Intl.RelativeTimeFormatUnit;
  seconds: number;
}

export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((date.getTime() - now.getTime()) / 1000);

  // Define our thresholds in seconds
  const units = [
    { unit: 'year',   seconds: 31536000 },
    { unit: 'month',  seconds: 2592000 },
    { unit: 'day',    seconds: 86400 },
    { unit: 'hour',   seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 }
  ] satisfies Unit[];

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  // Find the first unit where the difference is greater than the unit's seconds
  for (const { unit, seconds } of units) {
    if (Math.abs(diffInSeconds) >= seconds || unit === 'second') {
      const value = Math.floor(diffInSeconds / seconds);
      return rtf.format(value, unit);
    }
  }

  return rtf.format(0, 'second'); // Fallback for the current time
}