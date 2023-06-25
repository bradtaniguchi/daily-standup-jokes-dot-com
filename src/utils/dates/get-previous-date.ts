import { JokeDate, isJokeDate } from "@/types/joke/joke-date";
import dayjs from 'dayjs';

/**
 * Returns the previous date, utilized for "pagination" of individual joke pages.
 * 
 * @param date the date to get the previous date for, if not given assumes today
 */
export const getPreviousDate = (date?: JokeDate): JokeDate => {
  const guardJokeDate = (date: string) => {
    if (isJokeDate(date)) return date;
    throw new Error('Invalid joke date generated from dayjs');
  };

  if (!date) {
    const today = dayjs();
    const previousDate = today.subtract(1, 'day');
    return guardJokeDate(previousDate.format('YYYY-MM-DD'));
  }

  const previousDate = dayjs(date).subtract(1, 'day');
  return guardJokeDate(previousDate.format('YYYY-MM-DD'));
}