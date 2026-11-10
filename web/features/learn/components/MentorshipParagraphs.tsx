import type { Paragraph } from "../data/mentorship-content";

type Props = {
  paragraphs: readonly Paragraph[];
  /** text colour for body copy; bold parts inherit `strongClassName` */
  className: string;
  strongClassName: string;
  /** font-size and leading; defaults to the standard body scale */
  sizeClassName?: string;
};

/** Renders paragraph parts, setting `{ strong }` parts in bold. */
export function MentorshipParagraphs({
  paragraphs,
  className,
  strongClassName,
  sizeClassName = "text-[16px]! leading-[178%]! sm:text-[17px]! lg:text-[18px]!",
}: Props) {
  return (
    <>
      {paragraphs.map((parts, i) => (
        <p
          key={i}
          className={`text-left ${sizeClassName} ${className}`}
          style={{ fontFamily: "var(--font-delight)" }}
        >
          {parts.map((part, j) =>
            typeof part === "string" ? (
              part
            ) : (
              <strong key={j} className={`font-bold ${strongClassName}`}>
                {part.strong}
              </strong>
            ),
          )}
        </p>
      ))}
    </>
  );
}
