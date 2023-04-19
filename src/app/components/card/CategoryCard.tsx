import { Paragraph } from "../typo/paragraphs";
import { H6 } from "../typo/heading";
import { Tag } from "../tag";

export const CategoryCard = ({ cate }: { cate: Category }) => {
    return (
        <div className="h-auto max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <H6>{cate.title}</H6>
            <div className="mb-1" />
            <Paragraph>
                {cate.description}
            </Paragraph>
            <div className="mb-1" />
            <div className="flex gap-2 justify-start items-start flex-wrap">
                {cate.tags.map((name, index) => {
                    return <Tag name={name} key={index} />
                })}
            </div>
        </div>
    );
}
