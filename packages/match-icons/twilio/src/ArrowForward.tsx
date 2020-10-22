import * as React from "react";
import * as PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgArrowForward({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <filter id="arrow-forward_svg__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.223529 0 0 0 0 0.278431 0 0 0 0 0.384314 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        filter="url(#arrow-forward_svg__a)"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#000" strokeWidth={1.077}>
          <path d="M1 7.769h14M11.23 11.538L15 7.77 11.23 4" />
        </g>
      </g>
    </svg>
  );
}

SvgArrowForward.propTypes = {
  title: PropTypes.string,
};
const MemoSvgArrowForward = React.memo(SvgArrowForward);
export default MemoSvgArrowForward;
