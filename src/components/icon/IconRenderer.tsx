import React from "react";
import { Cpp } from "./svg/Cpp";
import { Java } from "./svg/Java";
import { JavaScript } from "./svg/Javascript";
import { Kotlin } from "./svg/Kotlin";
import { Elixir } from "./svg/Elixir";
import { Haskell } from "./svg/Haskell";
import { Python } from "./svg/Python";
import { Rust } from "./svg/Rust";
import { H6 } from "../typo/heading";

export const IconRenderer = (param: string, key: number) => {
  switch (param) {
    case "cpp":
      return <Cpp key={key} />;
    case "elixir":
      return <Elixir key={key} />;
    case "haskell":
      return <Haskell key={key} />;
    case "java":
      return <Java key={key} />;
    case "javascript":
      return <JavaScript key={key} />;
    case "kotlin":
      return <Kotlin key={key} />;
    case "python":
      return <Python key={key} />;
    case "rust":
      return <Rust key={key} />;
    default:
      return <H6 key={key}>{param}</H6>;
  }
};
