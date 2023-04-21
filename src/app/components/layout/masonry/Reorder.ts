import { Children, ReactNode } from "react";

export const Reorder = (children: ReactNode, cols: number) => {
  if (cols === 1) {
    return children;
  }

  const array: ReactNode[] = [];
  Children.forEach(children, (child) => {
    array.push(child);
  });

  const out: ReactNode[] = [];
  let col = 0;
  while (col < cols) {
    for (let i = 0; i < array.length; i += cols) {
      let _val = array[i + col];
      if (_val != undefined) {
        out.push(_val);
      }
    }
    col++;
  }
  return out;
};
