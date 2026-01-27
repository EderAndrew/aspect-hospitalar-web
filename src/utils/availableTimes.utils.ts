// Generate available time slots (8am to 5pm)
export const AvailableTimes = (): string[] => {
  const times: string[] = [];

  for (let hour = 8; hour <= 17; hour++) {
    times.push(`${hour.toString().padStart(2, "0")}:00`);
    if (hour < 17) {
      times.push(`${hour.toString().padStart(2, "0")}:30`);
    }
  }

  return times;
};
