import * as React from "react";
import * as PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAlignBottom({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="align-bottom_svg__bi align-bottom_svg__bi-align-bottom"
      fill="currentColor"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M6 2a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V2z" />
      <path
        fillRule="evenodd"
        d="M1 14.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
      />
    </svg>
  );
}

SvgAlignBottom.propTypes = {
  title: PropTypes.string,
};
const MemoSvgAlignBottom = React.memo(SvgAlignBottom);
export default MemoSvgAlignBottom;
