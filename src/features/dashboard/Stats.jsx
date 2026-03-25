import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const safeBookings = bookings ?? [];
  const safeConfirmedStays = confirmedStays ?? [];

  const numBookings = safeBookings.length;
  const sales = safeBookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = safeConfirmedStays.length;
  console.log("CheckIns:", checkins, "numDays:", numDays, "cabinCount:", cabinCount);
  const denominator = numDays * (cabinCount || 0);
  const occupantion = denominator
    ? Number(safeConfirmedStays.reduce((acc, cur) => acc + cur.numNights, 0)) /
      denominator
    : 0;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-Ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy Rates"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupantion * 100) + '%'}
      />
    </>
  );
}

export default Stats;
