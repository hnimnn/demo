import React, { useState, useEffect, useRef } from "react";
import "./AttendanceCard.scss";

type AttendanceCardProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  number: number;
  color: string;
};

const AttendanceCard: React.FC<AttendanceCardProps> = ({
  title,
  number,
  color,
  ...props
}) => {
  return (
    <div
      {...props}
      style={{ borderColor: `${color}`, ...props.style }}
      className={`attendace-card ${props.className}`}
    >
      <div className="attendace-card-number">{number}</div>
      <div className="attendace-card-title">{title}</div>
    </div>
  );
};

export default AttendanceCard;
