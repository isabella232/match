import * as React from "react";
import * as PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAlarm({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="alarm_svg__bi alarm_svg__bi-alarm"
      fill="currentColor"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M6.5 0a.5.5 0 000 1H7v1.07a7.001 7.001 0 00-3.273 12.474l-.602.602a.5.5 0 00.707.708l.746-.746A6.97 6.97 0 008 16a6.97 6.97 0 003.422-.892l.746.746a.5.5 0 00.707-.708l-.601-.602A7.001 7.001 0 009 2.07V1h.5a.5.5 0 000-1h-3zm1.038 3.018a6.093 6.093 0 01.924 0 6 6 0 11-.924 0zM8.5 5.5a.5.5 0 00-1 0v3.362l-1.429 2.38a.5.5 0 10.858.515l1.5-2.5A.5.5 0 008.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 014.387 1.86 2.5 2.5 0 000 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 013.527 3.527A2.5 2.5 0 0013.5 1z"
      />
    </svg>
  );
}

SvgAlarm.propTypes = {
  title: PropTypes.string,
};
const MemoSvgAlarm = React.memo(SvgAlarm);
export default MemoSvgAlarm;
