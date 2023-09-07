import { FC } from "react";

import CloseIcon from "@/public/icons/close";
import BlueTimerIcon from "@/public/icons/timerBlue";
import BlueCalenderIcon from "@/public/icons/calenderBlue";
import { title } from "process";

interface TaskPreviewProps {
  onEdit: () => void;
  title: string;
  onClose: () => void;
}

const TaskPreviewComponent: FC<TaskPreviewProps> = ({
  onEdit,
  title,
  onClose,
}) => {

  return (
    <div className="bg-white border rounded-lg h-fit w-[24.6875rem] p-6">
      <div className="text-end">
        <button className="" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold bg">{title}</h2>
        <div className="mt-2">
          <div className="flex justify-between w-[11.125rem]">
            <div>
              <BlueCalenderIcon />
            </div>
            <p className="font-medium">20th, January 2023</p>
          </div>
          <div className="flex justify-between w-[9.5rem]">
            <div>
              <BlueTimerIcon />
            </div>
            <p className="font-medium">8:00 - 10:00 AM</p>
          </div>
        </div>
        <div className="flex justify-between pt-8">
          <div className="w-[10.4375rem]">
            <button
              className="py-[0.625rem] px-[1.125rem] border border-solid border-schoolinka-grey-500 w-full rounded-lg font-semibold"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
          <div className="w-[10.4375rem]">
            <button
              className="py-[0.625rem] px-[1.125rem] border border-solid border-schoolinka-grey-500 rounded-lg font-semibold w-full text-sm text-white bg-schoolinka-primary"
              onClick={onEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPreviewComponent;
