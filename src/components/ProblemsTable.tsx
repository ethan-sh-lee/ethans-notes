"use client";

import CalendarHeatmapWrapper from "@/components/CalendarHeatmapWrapper";
import ProblemCard from "@/components/card/ProblemCard";
import Dropdown from "@/components/dropdown";
import useCheckBox from "@/hooks/useCheckBox";
import { Problem } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tag } from "./tag";

export const platformList = ["Programmers", "BOJ", "CodeWars", "LeetCode"];
export const langList = ["cpp", "kotlin"];
export type PlatformType = {
  id: string;
};

const ProblemsTable = ({ problemsProp }: { problemsProp: Problem[] }) => {
  const [problems, setProblems] = useState<Problem[]>(problemsProp);
  const { value, toggle } = useCheckBox([]);
  const [date, setDate] = useState<string>("");

  ////깃헙같은 캘린더 히트맵
  function onClickHandler(date: any) {
    if (date) {
      setDate(date);
    }
  }
  //깃헙같은 캘린더 히트맵

  useEffect(() => {
    setProblems(getDataByTagsByDate(problemsProp, value, date));
  }, [problemsProp, date, value]);

  return (
    <>
      <CalendarHeatmapWrapper
        allProblems={problemsProp}
        onClickHandler={onClickHandler}
      />
      <div className="mt-2" />
      <div className="flex gap-2">
        <Dropdown
          name={"플랫폼"}
          checkList={platformList}
          selectedList={value}
          handler={toggle}
        />
        <Dropdown
          name={"프로그래밍 언어"}
          checkList={langList}
          selectedList={value}
          handler={toggle}
        />
      </div>
      <div className="mt-2" />
      <div className="flex gap-2 justify-start items-start flex-wrap">
        {value.map((name, index) => {
          return <Tag clickable handler={toggle} name={name} key={index} />;
        })}
      </div>
      <div className="pt-4 gap-2 grid grid-cols-1 md:grid-cols-2">
        {problems.map((problem, index) => (
          <Link key={index} href={problem.url}>
            <ProblemCard {...problem} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProblemsTable;

function getDataByTagsByDate(
  allProblems: Problem[],
  value: string[],
  date: string
): Problem[] {
  const platforms = value.filter((v) => platformList.includes(v));
  const langs = value.filter((v) => langList.includes(v));
  const problems: Problem[] = allProblems
    .filter((p) => {
      return p.isPublished;
    })
    .filter((p) => {
      if (platforms.length == 0) {
        return true;
      }
      return platforms.includes(p.platform.type);
    })
    .filter((p) => {
      if (langs.length == 0) {
        return true;
      }
      var isOk = false;
      for (const log of p.logs!) {
        if (langs.includes(log.lang)) {
          isOk = true;
          break;
        }
      }

      return isOk;
    })
    .filter((p) => {
      if (date == "") {
        return true;
      }
      var isOk = false;
      for (const log of p.logs!) {
        if (
          new Date(log.date).toISOString().slice(0, 10) ==
          new Date(date).toISOString().slice(0, 10)
        ) {
          isOk = true;
          break;
        }
      }
      return isOk;
    })
    .sort((a: any, b: any) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return problems;
}
