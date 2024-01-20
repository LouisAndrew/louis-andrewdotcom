import { padNumber } from "../../utils";
import type { TimelineItem } from "./Timeline";

type Props = Pick<TimelineItem, "startDate" | "endDate">;
const TimelineContentDate = ({ startDate, endDate }: Props) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${padNumber(month)}.${year}`;
  };

  return (
    <h3>
      {formatDate(startDate).concat(" - ")}
      {endDate ? (
        <>{formatDate(endDate)}</>
      ) : (
        <span class="text-xs text-mfed-tertiary">PRESENT</span>
      )}
    </h3>
  );
};

export default TimelineContentDate;
