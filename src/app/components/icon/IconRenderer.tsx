import React from "react";
import { Cpp } from "./svg/cpp";
import { Java } from "./svg/java";
import { JavaScript } from "./svg/javascript";
import { Kotlin } from "./svg/kotlin";

export const iconRenderer = (param: string, key: number) => {
  switch (param) {
    case 'cpp':
      return <Cpp key={key} />;
    case 'java':
      return <Java key={key} />;
    case 'javascript':
      return <JavaScript key={key} />;
    case 'kotlin':
      return <Kotlin key={key} />;
    default:
      return param;
  }
} 
