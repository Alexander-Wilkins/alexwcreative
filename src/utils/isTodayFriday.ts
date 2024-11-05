export function isTodayFriday(): boolean {
    const today = new Date();
    return today.getDay() === 5;
}