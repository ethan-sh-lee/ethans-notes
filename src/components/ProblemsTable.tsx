"use client";

import CalendarHeatmapWrapper from "@/components/CalendarHeatmapWrapper";
import ProblemCard from "@/components/card/ProblemCard";
import Dropdown from "@/components/dropdown";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProblemsTable = ({ problemsProp }: { problemsProp: any[] }) => {
  const [problems, setProblems] = useState(problemsProp);

  ////깃헙같은 캘린더 히트맵
  function onClickHandler(date: any) {
    if (date) {
      setProblems(getProblemsByDate(problemsProp, date));
    }
  }
  //깃헙같은 캘린더 히트맵

  //드랍다운 시작
  const [selected, setSelected] = useState<string[]>([]);
  const platforms = ["Programmers", "BOJ", "CodeWars", "LeetCode"];
  const dropdownHandler = (name: string) => {
    setSelected((prevSelected: any) => {
      const newArray = [...prevSelected];
      if (newArray.includes(name)) {
        return newArray.filter((item) => item != name);
      } else {
        newArray.push(name);
        return newArray;
      }
    });
  };
  //드랍다운 끝

  useEffect(() => {
    setProblems(getDataByPlatform(problemsProp, selected));
  }, [problemsProp, selected, selected.length]);

  return (
    <>
      <CalendarHeatmapWrapper
        allProblems={problemsProp}
        onClickHandler={onClickHandler}
      />
      <div className="mt-2" />
      <Dropdown
        name={"플랫폼"}
        data={platforms}
        selected={selected}
        handler={dropdownHandler}
      />
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

function getDataByPlatform(allProblems: any, array: Array<string>) {
  const problems = allProblems
    .filter((p: any) => {
      if (array.length == 0) {
        return true;
      }
      return array.includes(p.platform.type);
    })
    .filter((p: any) => {
      return p.isPublished;
    })
    .sort((a: any, b: any) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return problems;
}

function getProblemsByDate(allProblems: any[], date: any) {
  const problems = allProblems
    .filter((p) => {
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
    .filter((p) => {
      return p.isPublished;
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return problems;
}
