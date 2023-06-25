import { JokeDate, isJokeDate } from "@/types/joke/joke-date";
import dayjs from "dayjs";

/**
 * Returns 30 days in the past, if not given assumes today.
 * 
 * @param date the date to get the previous 30 days for, if not given assumes today
 */
export const getPrevious30Days = (date?: JokeDate) => {
    const guardJokeDate = (date: string) => {
        if (isJokeDate(date))
            return date;
        throw new Error('Invalid joke date generated from dayjs');
    };
    if (!date) {
        const today = dayjs();
        const previous30Days = today.subtract(30, 'day');
        return guardJokeDate(previous30Days.format('YYYY-MM-DD'));
    }
    const previous30Days = dayjs(date).subtract(30, 'day');
    return guardJokeDate(previous30Days.format('YYYY-MM-DD'));
}