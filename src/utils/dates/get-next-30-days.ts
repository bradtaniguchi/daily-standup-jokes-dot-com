import { JokeDate, isJokeDate } from "@/types/joke/joke-date";
import dayjs from "dayjs";

/**
 * Returns the date 30 days in the future, if not given assumes today.
 * 
 * @param date the date to get the next 30 days for, if not given assumes today
 */
export const getNext30Days = (date?: JokeDate) => {
    const guardJokeDate = (date: string) => {
        if (isJokeDate(date))
            return date;
        throw new Error('Invalid joke date generated from dayjs');
    };
    if (!date) {
        const today = dayjs();
        const next30Days = today.add(30, 'day');
        return guardJokeDate(next30Days.format('YYYY-MM-DD'));
    }
    const next30Days = dayjs(date).add(30, 'day');
    return guardJokeDate(next30Days.format('YYYY-MM-DD'));
}