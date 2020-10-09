import * as React from "react";
import * as PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAppIndicator({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="app-indicator_svg__bi app-indicator_svg__bi-app-indicator"
      fill="currentColor"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M5.5 2A3.5 3.5 0 002 5.5v5A3.5 3.5 0 005.5 14h5a3.5 3.5 0 003.5-3.5V8a.5.5 0 011 0v2.5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 011 10.5v-5A4.5 4.5 0 015.5 1H8a.5.5 0 010 1H5.5z"
      />
      <path d="M16 3a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

SvgAppIndicator.propTypes = {
  title: PropTypes.string,
};
const MemoSvgAppIndicator = React.memo(SvgAppIndicator);
export default MemoSvgAppIndicator;
