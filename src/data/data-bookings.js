import { add } from "date-fns";
import { cabins } from "./data-cabins";

function isoDateFromToday(numDays) {
  const date = add(new Date(), { days: numDays });
  date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().split("T")[0];
}

function isoTimestampFromToday(numDays) {
  const date = add(new Date(), { days: numDays });
  date.setUTCHours(12, 0, 0, 0);
  return date.toISOString();
}

const observations = [
  "Need airport transfer",
  "Vegetarian breakfast only",
  "Late check-in requested",
  "Please arrange anniversary decor",
  "Need extra blankets",
  "Traveling with senior citizens",
  "",
  "Request room near parking",
  "Please prepare bonfire setup",
  "Need one baby crib",
];

const ACTIVITIES_PER_DAY = 4;
const FUTURE_DAYS = 60;
const PAST_BOOKINGS = 36;

const guaranteedFutureBookings = Array.from(
  { length: (FUTURE_DAYS + 1) * ACTIVITIES_PER_DAY },
  (_, index) => {
    const dayOffset = Math.floor(index / ACTIVITIES_PER_DAY);
    const slotInDay = index % ACTIVITIES_PER_DAY;

    const cabinIndex = (dayOffset * ACTIVITIES_PER_DAY + slotInDay) % cabins.length;
    const cabin = cabins[cabinIndex];

    const stayLength = 2 + ((dayOffset + slotInDay) % 5);
    const createdOffset = dayOffset - (3 + ((dayOffset + slotInDay) % 10));
    const maxGuests = cabin.maxCapacity;
    const numGuests = 1 + ((dayOffset + slotInDay * 2) % maxGuests);

    return {
      created_at: isoTimestampFromToday(createdOffset),
      startDate: isoDateFromToday(dayOffset),
      endDate: isoDateFromToday(dayOffset + stayLength),
      cabinId: 91 + cabinIndex,
      guestId: index + 1,
      hasBreakfast: (dayOffset + slotInDay) % 3 !== 0,
      observations: observations[(dayOffset + slotInDay) % observations.length],
      isPaid: (dayOffset + slotInDay) % 4 !== 0,
      numGuests,
      status: "unconfirmed",
    };
  }
);

const pastBookings = Array.from({ length: PAST_BOOKINGS }, (_, index) => {
  const cabinIndex = index % cabins.length;
  const cabin = cabins[cabinIndex];

  const startOffset = -40 + index;
  const stayLength = 2 + (index % 5);
  const createdOffset = startOffset - (2 + (index % 7));
  const maxGuests = cabin.maxCapacity;
  const numGuests = 1 + ((index * 2) % maxGuests);

  return {
    created_at: isoTimestampFromToday(createdOffset),
    startDate: isoDateFromToday(startOffset),
    endDate: isoDateFromToday(startOffset + stayLength),
    cabinId: 91 + cabinIndex,
    guestId: guaranteedFutureBookings.length + index + 1,
    hasBreakfast: index % 2 === 0,
    observations: observations[index % observations.length],
    isPaid: true,
    numGuests,
    status: "unconfirmed",
  };
});

export const bookings = [...pastBookings, ...guaranteedFutureBookings];