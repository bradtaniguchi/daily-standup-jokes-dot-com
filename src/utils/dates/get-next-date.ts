import { JokeDate, isJokeDate } from "@/types/joke/joke-date";
import dayjs from 'dayjs';

/**
 * Returns the next date, utilized for "pagination" of individual joke pages.
 * 
 * @param date the date to get the next date for, if not given assumes today
 */
export const getNextDate = (date?: JokeDate): JokeDate => {
  const guardJokeDate = (date: string) => {
    if (isJokeDate(date)) return date;
    throw new Error('Invalid joke date generated from dayjs');
  };

  if (!date) {
    const today = dayjs();
    const nextDate = today.add(1, 'day');
    return guardJokeDate(nextDate.format('YYYY-MM-DD'));
  }

  const nextDate = dayjs(date).add(1, 'day');
  return guardJokeDate(nextDate.format('YYYY-MM-DD'));
}