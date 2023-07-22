import DecorationVector from "../../common/decoration-vector";
import {
  dummyMentorWithPicture,
  dummyMentorWithoutPicture,
  dummyReviews,
} from "@/lib/dummies";
import {
  IconUserCircle,
  IconVocabulary,
  IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";
import ReactStars from "react-stars";

export default function MentorDetail({ mentorId }: { mentorId: string }) {
  const mentor = dummyMentorWithPicture;
  const reviews = dummyReviews;
  const ratings = reviews.map((review) => review.rating);

  const renderProfilePicture = () => {
    if (!mentor.imageUrl) {
      return <IconUserCircle size={64} />;
    } else {
      return (
        <div className="w-[4rem] h-[4rem] relative rounded-full overflow-hidden">
          <Image
            alt={mentor.name}
            src={mentor.imageUrl}
            fill
            className="object-cover"
          />
        </div>
      );
    }
  };

  return (
    <div className="default-wrapper">
      <DecorationVector />
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-[1rem] items-center">
          {renderProfilePicture()}
          <div className="flex flex-col gap-[0.5rem]">
            <div className="subheader">{mentor.name}</div>
            <div className="flex items-center gap-[1rem]">
              <IconVocabulary />
              <p className="paragraph max-w-[200px] md:max-w-[400px]">
                {mentor.tags.slice(0, 2).join(", ")}
                {mentor.tags.length > 2 &&
                  ` dan ${mentor.tags.length - 2} ketertarikan lainnya`}
              </p>
            </div>
            <div className="flex items-center gap-[1rem]">
              <IconMapPin />
              <p className="paragraph max-w-[200px] md:max-w-[400px]">
                {mentor.city}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem] justify-center items-center">
          <ReactStars
            count={1}
            value={1}
            edit={false}
            size={32}
            className="drop-shadow-lg"
          />
          <p className="paragraph">
            {`${
              ratings.length === 0
                ? Math.round(0).toFixed(1)
                : (
                    ratings.reduce((prev, curr) => prev + curr) / ratings.length
                  ).toFixed(1)
            }/5.0`}
          </p>
        </div>
      </div>
    </div>
  );
}
