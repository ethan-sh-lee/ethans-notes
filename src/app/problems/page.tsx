"use client";

import { compareDesc } from "date-fns";
import { Problem, allProblems } from "contentlayer/generated";
import ProblemCard from "../../components/card/ProblemCard";
import { PageHeading } from "../../components/typo/PageHeading";
import { PageLayout } from "../../components/layout/PageLayout";
import Link from "next/link";
import DropDown from "@/components/dropdown";
import { useEffect, useState } from "react";

//메인 화면
//포스트 카드와 포스트 리스트로 블로그 글을 탐색할 수 있도록 함

function getData(array: string[]) {
  const problems: Problem[] = allProblems
    .filter((p) => {
      if (array.length == 0) {
        return true;
      }
      return array.includes(p.platform.type);
    })
    .filter((p) => {
      return p.isPublished;
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return problems;
}

export default function Home() {
  const [problems, setProblems] = useState(
    getData(["Programmers", "BOJ", "CodeWars", "LeetCode"])
  );

  // 드랍다운 시작
  const [selected, setSelected] = useState<string[]>([]);
  const platforms = ["Programmers", "BOJ", "CodeWars", "LeetCode"];
  const dropdownHandler = (name: string) => {
    setSelected((prevSelected) => {
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
    setProblems(getData(selected));
  }, [selected, selected.length]);

  return (
    <PageLayout>
      <PageHeading
        head="Problems"
        summary="더 나은 문제해결 능력을 위해 알고리즘 문제를 풀고 있습니다."
      />
      <div className="mt-2" />
      <DropDown
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
    </PageLayout>
  );
}
