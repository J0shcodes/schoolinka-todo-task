"use client";

import { useEffect, useState, FC } from "react";

import Dates from "./Dates";
import Tasks from "./Tasks";
import AddTaskComponent from "../AddTask";
import EditTaskComponent from "./EditTask";

interface TodosProps {
  addTask: boolean;
  onClose: () => void
}

const Todos: FC<TodosProps> = ({ addTask, onClose }) => {
  const [editTask, setEditTask] = useState(false)
  const [title, setTitle] = useState<string>("")

  const OnEdit = (title: string) => {
    if(!editTask) {
      setEditTask(true)
      setTitle(title)
    } else {
      setEditTask(false)
    }

  }

  return (
    <div className="mt-8 px-4 flex justify-between gap-6">
      <div className="w-[52.625rem] border-r border-solid border-schoolinka-grey-200 pr-5">
        <Dates />
        <Tasks onEdit={OnEdit} editTask={editTask} />
      </div>
      {addTask ? <AddTaskComponent onClose={onClose}/> : null}
      {editTask ? <EditTaskComponent onClose={onClose} /> : null}
    </div>
  );
};

export default Todos;
