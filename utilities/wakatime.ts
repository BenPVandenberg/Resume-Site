import { WAKATIME_API_URL, WAKATIME_USERID } from './constants';
import axios from 'axios';
import { WakaTimeData } from './types';

/**
 * PRIVATE VARIABLES
 */

let wakatimeData: WakaTimeData | null = null;

/**
 * PRIVATE FUNCTIONS
 */

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
 * PUBLIC FUNCTIONS
 */

/**
 * Get language stats from WakaTime API
 * @return language stats
 */
export async function getLanguageStats() {
    const data = await getWakatimeData();
    return data.languages;
}
