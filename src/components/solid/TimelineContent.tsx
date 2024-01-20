import { Dynamic } from "solid-js/web";

import { parseContent } from "../../utils";
import type { TimelineItem } from "./Timeline";
import TimelineContentDate from "./TimelineContentDate";

const TimelineContent = ({
  startDate,
  endDate,
  summary,
  institutionUrl,
  institution,
  position,
}: TimelineItem) => {
  const getDynamicComponentAttributes = (
    institutionUrl: TimelineItem["institutionUrl"]
  ) => {
    if (institutionUrl) {
      return {
        href: institutionUrl,
        target: "_blank",
      };
    }

    return {};
  };

  return (
    <div class="timeline-content">
      <TimelineContentDate {...{ startDate, endDate }} />

      <h4>
        {position}
        <Dynamic
          component={institutionUrl ? "a" : "span"}
          {...getDynamicComponentAttributes(institutionUrl)}
        >
          {institution}
        </Dynamic>
      </h4>

      <p innerHTML={parseContent(summary)} />
    </div>
  );
};

export default TimelineContent;
