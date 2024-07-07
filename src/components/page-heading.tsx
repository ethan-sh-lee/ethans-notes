import { TypographyH2, TypographyP } from "@/components/typograhpy";

interface headProps {
  head: string;
  summary?: string;
}
export const PageHeading = (props: headProps) => {
  return (
    <>
      <TypographyH2>{props.head}</TypographyH2>
      {props.summary != null ? (
        <TypographyP>{props.summary}</TypographyP>
      ) : null}
    </>
  );
};
