import { WAKATIME_API_URL, WAKATIME_USERID } from './constants';
import axios from 'axios';
import { WakaTimeData } from './types';

/**
 * PRIVATE VARIABLES + FUNCTIONS
 */

let wakatimeData: WakaTimeData | null = null;

/**
 * Fetch data from WakaTime API
 */
async function getWakatimeData(): Promise<WakaTimeData> {
    // if we already have stats, return them
    if (wakatimeData) {
        return wakatimeData;
    }

    // otherwise, fetch them
    const statsURL = `${WAKATIME_API_URL}/users/${WAKATIME_USERID}/stats`;
    const response = await axios.get(statsURL);

    return response.data.data;
}

/**
 * Get language stats from WakaTime API
 * @return language stats
 */
async function getLanguageStats() {
    const data = await getWakatimeData();
    return data.languages;
}

/**
 * PUBLIC FUNCTIONS
 */

/**
 * Get top languages
 * @param count number of elements to return
 */
export async function getTopLanguages(count = 10) {
    const stats = await getLanguageStats();
    const topLanguages = stats.slice(0, count);

    return topLanguages;
}
