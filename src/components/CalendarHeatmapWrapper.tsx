"use client";

import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";
import "@/styles/calendar-heatmap.css";
import { useTheme } from "next-themes";
import { Problem } from "contentlayer/generated";

export type HeatmapDataType = {
  date: Date;
  count: number;
};
const CalendarHeatmapWrapper = ({
  allProblems,
  onClickHandler,
}: {
  allProblems: Problem[];
  onClickHandler: any;
}) => {
  const { theme } = useTheme();
  const blockSize = 16;

  const now = new Date();
  let date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  return (
    <div className="overflow-x-scroll">
      <div className="w-[900px] sm:w-[1000px] md:w-full">
        <CalendarHeatmap
          startDate={date}
          endDate={now}
          values={getProblemsByDate(allProblems)}
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
          <p className="text-xs  text-gray-700 dark:text-gray-400">
            {`problems that solved while one year : ${getAllProblems(
              allProblems,
              date
            )}`}
          </p>
          <div className="flex gap-0.5 items-center">
            <p className="text-xs mr-0.5 text-gray-700 dark:text-gray-400">
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
            <p className="text-xs ml-0.5 text-gray-700 dark:text-gray-400">
              More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeatmapWrapper;

function getProblemsByDate(allProblems: any) {
  const map = new Map();
  allProblems.forEach((value: any) => {
    value.logs?.forEach((log: any) => {
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

function getAllProblems(allProblems: Problem[], start: Date) {
  var result = 0;
  allProblems.forEach((p: Problem) => {
    p.logs?.forEach((log) => {
      const date = new Date(log.date);
      if (start <= date) {
        result++;
      }
    });
  });

  return result;
}
