"use client";

import { useState } from "react";

const useCheckBox = (init: string[]) => {
  const [value, setValue] = useState<string[]>(init);

  function toggle(data: string) {
    if (value.includes(data)) {
      setValue((prevState) =>
        prevState.filter((prevItem) => prevItem !== data)
      );
    } else {
      setValue([...value, data]);
    }
  }
  return { value, toggle };
};

export default useCheckBox;
