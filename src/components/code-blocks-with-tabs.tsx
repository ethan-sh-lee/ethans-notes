import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CodeBlocksWithTabs = (value: any) => {
  const children = value.children;
  return (
    <Tabs defaultValue="java">
      <TabsList>
        {children.map((child: any) => {
          const title = child["props"].className.replace("language-", "");
          return (
            <TabsTrigger key={title} className="mr-3" value={title}>
              {title}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {children.map((child: any) => {
        const title = child["props"].className.replace("language-", "");
        return (
          <TabsContent key={title} value={title}>
            {child}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
