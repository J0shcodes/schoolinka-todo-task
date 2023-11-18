"use client";

import { useEffect, useState, FC } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';

import Dates from "./Dates";
import Tasks from "./Tasks";
import AddTaskComponent from "../AddTask";
import EditTaskComponent from "./EditTask";
import TaskPreviewComponent from "../TaskPreview";

interface TodosProps {
  addTask: boolean;
  onClose: () => void;
  showCalendar: boolean;
  closeCalendar: () => void;
  openCalendar: () => void;
}

const Todos: FC<TodosProps> = ({ addTask, onClose, showCalendar, closeCalendar, openCalendar }) => {
  const [editTask, setEditTask] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [previewTask, setPreviewTask] = useState<boolean>(false);
  // const [showCalendar, setShowCalendar] = useState<boolean>(true);
  const [date, setDate] = useState<any>(new Date())

  const onEdit = () => {
    setEditTask(true);
    // setTitle(title)
    setPreviewTask(false);
    closeCalendar
    openCalendar
  };

  const closeEditTask = () => {
    setEditTask(false);
    openCalendar()
  };

  const onPreview = (title: string) => {
    setPreviewTask(true);
    if (addTask) onClose();
    setTitle(title);
    closeCalendar()
  };

  const closePreviewTask = () => {
    setPreviewTask(false);
    openCalendar
  };

  // const closeCalendar = () => {
  //   setShowCalendar(false)
  // }

  return (
    <div className="mt-8 px-4 flex justify-between gap-6">
      <div className="w-[52.625rem] border-r border-solid border-schoolinka-grey-200 pr-5">
        <Dates />
        <Tasks
          onPreview={onPreview}
          previewTask={previewTask}
          onClose={closePreviewTask}
        />
      </div>
      {showCalendar ? <div className="w-[24.6875rem]"><Calendar onChange={setDate} value={date}/></div> : null}
      {addTask ? <AddTaskComponent onClose={onClose} closeCalender={closeCalendar} /> : null}
      {editTask ? (
        <EditTaskComponent onClose={closeEditTask} title={title} />
      ) : null}
      {previewTask ? (
        <TaskPreviewComponent
          onEdit={onEdit}
          title={title}
          onClose={closePreviewTask}
        />
      ) : null}
    </div>
  );
};

export default Todos;