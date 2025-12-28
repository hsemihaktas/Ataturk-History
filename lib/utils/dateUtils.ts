import { HistoricalEvent } from "../types";

const TR_MONTHS: { [key: string]: number } = {
    'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3, 'Mayıs': 4, 'Haziran': 5,
    'Temmuz': 6, 'Ağustos': 7, 'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
};

export function getEventsOnThisDay(events: HistoricalEvent[]): HistoricalEvent[] {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();

    return events.filter(event => {
        // Expected format: "DD Month YYYY" or just "YYYY"
        // We only care about events with specific days
        const parts = event.date.split(' ');

        if (parts.length >= 3) {
            const day = parseInt(parts[0]);
            const monthName = parts[1];

            // Check if it's a valid date structure "19 Mayıs 1919"
            if (!isNaN(day) && TR_MONTHS[monthName] !== undefined) {
                return day === currentDay && TR_MONTHS[monthName] === currentMonth;
            }
        }
        return false;
    });
}
