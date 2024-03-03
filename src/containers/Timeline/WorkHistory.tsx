import React from "react";

export type WorkHistoryProps = {
  date: string;
  company: string;
  position: string;
};

export default function WorkHistory({
  date,
  company,
  position,
}: WorkHistoryProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-16 w-full mb-10">
      <div className="text-base min-w-[170px] font-medium mb-2 italic">
        {date}
      </div>
      <div>
        <div className="text-xl text-orange-600 dark:text-orange-400 font-medium">
          {company}
        </div>
        <div className="text-base">{position}</div>
      </div>
    </div>
  );
}
