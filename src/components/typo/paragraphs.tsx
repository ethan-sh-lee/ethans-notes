export const XSParagraph = ({ children }: { children: string }) => (
  <p className="text-xs font-light text-gray-500 dark:text-gray-400">
    {children}
  </p>
);
export const SmallParagraph = ({ children }: { children: string }) => (
  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    {children}
  </p>
);
export const Paragraph = ({
  children,
}: {
  children: string | number | undefined;
}) => <p className="text-gray-500 dark:text-gray-400">{children}</p>;
export const BlackParagraph = ({
  children,
}: {
  children: string | number | undefined;
}) => <p className="text-black dark:text-white">{children}</p>;
export const BlueParagraph = ({
  children,
}: {
  children: string | number | undefined;
}) => <p className="text-blue-600 dark:text-blue-500 font-bold">{children}</p>;
export const RedParagraph = ({
  children,
}: {
  children: string | number | undefined;
}) => <p className="text-red-600 dark:text-red-500 font-bold">{children}</p>;
export const GreenParagraph = ({
  children,
}: {
  children: string | number | undefined;
}) => (
  <p className="text-green-600 dark:text-green-500 font-bold">{children}</p>
);
