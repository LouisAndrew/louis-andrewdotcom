import "./Timeline.css";

import { For } from "solid-js";

import TimelineContent from "./TimelineContent";

export type TimelineItem = {
  startDate: string;
  endDate?: string;
  summary: string;
  position: string;
  institution: string;
  institutionUrl?: string;
  location: string;
};

type Props = {
  items: TimelineItem[];
};

export default ({ items }: Props) => {
  return (
    <ul>
      <For each={items}>
        {item => (
          <li class="flex">
            <div class="timeline-item">
              <div class="indicator" />
              <div class="bar" />
            </div>

            <TimelineContent {...item} />
          </li>
        )}
      </For>
    </ul>
  );
};
