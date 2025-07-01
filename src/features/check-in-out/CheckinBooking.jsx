import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";

const Highlight = styled.span`
  color: var(--color-brand-700);
  font-weight: 700;
`;

const PriceBreakdown = styled.span`
  color: var(--color-brand-600);
  font-size: 1.4rem;
  font-weight: 500;
  margin-left: 0.4em;
`;

const GuestName = styled.span`
  font-weight: 600;
  color: var(--color-grey-800);
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading, error } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();
  console.log("checkinBooking:", settings);

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();

  if (isLoading || isLoadingSettings) return <Spinner />;
  if (error)
    return (
      <div style={{ padding: "2rem", color: "red" }}>
        Could not load booking. Please try again.
      </div>
    );
  if (!booking)
    return <div style={{ padding: "2rem" }}>Booking not found.</div>;
  if (!settings)
    return <div style={{ padding: "2rem" }}>Settings not found.</div>;

  const {
    id: bookingId,
    Guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;
  
  function handleCheckin() {
    if (!confirmPaid) return;
    if (!bookingId || isNaN(Number(bookingId))) {
      alert('Invalid booking ID.');
      return;
    }
    const id = Number(bookingId);
    if (addBreakfast) {
      checkin({
        bookingId: id,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId: id, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for{" "}
            <Highlight>{formatCurrency(optionalBreakfastPrice)}</Highlight>?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          I confirm that <GuestName>{Guests.fullName}</GuestName> has paid the
          total amount of{" "}
          <Highlight>
            {!addBreakfast ? (
              formatCurrency(totalPrice)
            ) : (
              <>
                {formatCurrency(totalPrice + optionalBreakfastPrice)}
                <PriceBreakdown>
                  ({formatCurrency(totalPrice)} +{" "}
                  {formatCurrency(optionalBreakfastPrice)})
                </PriceBreakdown>
              </>
            )}
          </Highlight>
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
