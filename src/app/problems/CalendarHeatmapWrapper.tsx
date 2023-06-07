"use client";

import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";
import "@/styles/calendar-heatmap.css";
import { allProblems } from "contentlayer/generated";
import { useTheme } from "next-themes";

export type HeatmapDataType = {
  date: Date;
  count: number;
};
export default function CalendarHeatmapWrapper({
  onClickHandler,
}: {
  onClickHandler: any;
}) {
  const { theme } = useTheme();
  const blockSize = 16;

  return (
    <div className="overflow-x-scroll">
      <div className="w-[900px] sm:w-[1000px] md:w-full">
        <CalendarHeatmap
          startDate={new Date("2023-01-01")}
          endDate={new Date("2023-12-31")}
          values={getProblemsByDate()}
          gutterSize={2}
          showMonthLabels={true}
          classForValue={(value) => {
            if (theme == "dark") {
              if (!value) {
                return "dark-color-empty";
              }
              if (value.count > 5) {
                return `dark-color-github-5 cursor-pointer`;
              }
              return `dark-color-github-${value.count} cursor-pointer`;
            } else {
              if (!value) {
                return "color-empty";
              }
              if (value.count > 5) {
                return `color-github-5 cursor-pointer`;
              }
              return `color-github-${value.count} cursor-pointer`;
            }
          }}
          tooltipDataAttrs={(value: any) => {
            var text = "";
            if (
              value == null ||
              value.count == null ||
              value.date == undefined ||
              value.count == 0
            ) {
            } else {
              text = `Solved ${value.count} problems in ${value?.date
                ?.toISOString()
                .slice(0, 10)}`;
            }
            return {
              "data-tooltip-id": "tooltip",
              "data-tooltip-content": text,
            };
          }}
          onClick={(value) => onClickHandler(value?.date)}
        />
        <Tooltip id="tooltip" />

        <div className="flex justify-between items-center">
          <p className="text-xs md:text-sm lg:text-sm text-gray-500 dark:text-gray-400">
            {`${getAllProblems()} problems in 2023`}
          </p>
          <div className="flex gap-0.5 items-center">
            <p className="text-xs md:text-sm lg:text-md text-gray-500 dark:text-gray-400">
              Less
            </p>
            {Array.from({ length: 5 }).map((v, i) => {
              if (theme == "light") {
                return (
                  <svg
                    className="react-calendar-heatmap"
                    width={blockSize}
                    height={blockSize}
                    key={i}
                  >
                    <rect
                      width={blockSize}
                      height={blockSize}
                      className={`color-github-${i + 1}`}
                      rx={2}
                      ry={2}
                    ></rect>
                  </svg>
                );
              } else {
                return (
                  <svg
                    className="react-calendar-heatmap"
                    width={blockSize}
                    height={blockSize}
                    key={i}
                  >
                    <rect
                      width={blockSize}
                      height={blockSize}
                      className={`dark-color-github-${i + 1}`}
                      rx={2}
                      ry={2}
                    ></rect>
                  </svg>
                );
              }
            })}
            <p className="text-xs md:text-sm lg:text-sm text-gray-500 dark:text-gray-400">
              more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function getProblemsByDate() {
  const map = new Map();
  allProblems.forEach((value) => {
    value.logs?.forEach((log) => {
      var date = new Date(log.date).toISOString().slice(0, 10);
      if (map.has(date)) {
        var num = map.get(date);
        num++;
        map.set(date, num);
      } else {
        map.set(date, 1);
      }
    });
  });
  const result = new Array();
  map.forEach((value, key) => {
    result.push({ date: new Date(key), count: value });
  });

  return result;
}

function getAllProblems() {
  var result = 0;
  allProblems.forEach((p) => {
    result = result + p.logs?.length!;
  });

  return result;
}
