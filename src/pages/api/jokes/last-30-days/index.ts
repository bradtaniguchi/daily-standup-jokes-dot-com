
import { getJokesForLast30Days } from '@/utils/jokes/get-jokes-for-last-30-days';
import { NextResponse } from 'next/server'
 
/**
 * Returns the last 30 days of jokes from the API. 
 * 
 * TODO: this needs more work and testing
 */
export async function GET() {
  const last30DaysOfJokes = await getJokesForLast30Days();
 
  return NextResponse.json({ data: last30DaysOfJokes })
}