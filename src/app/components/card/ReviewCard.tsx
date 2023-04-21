import Image from 'next/image'
import { Review } from "contentlayer/generated";
import { H6 } from '../typo/heading';
import { Paragraph } from '../typo/paragraphs';

export const ReviewCard = (review: Review) => {

    return (
        <div className="break-words h-auto max-w-full p-4 bg-white border border-gray-200 
                        rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700
                        hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Image
                className='w-full h-auto'
                src={review.media}
                height={0} width={0} alt='image' sizes='100vw' />
            <H6>{review.title}</H6>
            <div className="mb-1" />
            <Paragraph>
                {review.description}
            </Paragraph>
        </div>
    )
}