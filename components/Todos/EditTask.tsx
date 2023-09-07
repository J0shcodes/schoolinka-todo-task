import { FC } from "react";

import CloseIcon from "@/public/icons/close";
import TimerIcon from "@/public/icons/timer";
import CalenderIcon from "@/public/icons/calender";
import BellIcon from "@/public/icons/bell";

interface EditTaskProps {
  onClose: () => void;
  title: string;
}

const EditTaskComponent: FC<EditTaskProps> = ({ onClose, title }) => {
  return (
    <div className="bg-white border rounded-lg h-fit w-[24.6875rem] p-6">
      <div className="flex justify-between">
        <h2 className="text-schoolinka-grey-900 text-lg font-semibold">
          Edit Task
        </h2>
        <button className="flex flex-col justify-center" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <form className="mt-6">
        <div className="w-[21.625rem] h-[8.75rem]">
          <textarea className="w-full h-full border rounded-lg outline-none resize-none py-[0.75rem] px-[0.875rem] border-schoolinka-grey-300 bg-schoolinka-grey-50" value={title} />
        </div>
        <div className="mt-6 flex justify-between">
          <button className="flex justify-between border border-solid border-schoolinka-grey-300 py-[0.625rem] px-[1rem] rounded-lg w-[6.25rem]">
            <div>
              <CalenderIcon />
            </div>
            <p className="text-sm font-semibold text-schoolinka-grey-500">
              Today
            </p>
          </button>
          <button className="flex justify-between border border-solid border-schoolinka-grey-300 py-[0.625rem] px-[1rem] rounded-lg w-[6.25rem]">
            <div>
              <TimerIcon />
            </div>
            <p className="text-sm font-semibold text-schoolinka-grey-500">
              0:00
            </p>
          </button>
          <button className="flex justify-between border border-solid border-schoolinka-grey-300 py-[0.625rem] px-[1rem] rounded-lg w-[6.25rem]">
            <div>
              <TimerIcon />
            </div>
            <p className="text-sm font-semibold text-schoolinka-grey-500">
              0:00
            </p>
          </button>
        </div>
        <div className="mt-5 flex justify-between">
          <div className="flex justify-between w-[9.5625rem]">
            <div>
              <BellIcon />
            </div>
            <p className="font-medium text-schoolinka-grey-500">
              10 Minutes before
            </p>
          </div>
          <div className="w-[1rem]">
            <CloseIcon />
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
            <button className="py-[0.625rem] px-[1.125rem] border border-solid border-schoolinka-grey-500 rounded-lg font-semibold w-full text-sm text-white bg-schoolinka-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTaskComponent;
