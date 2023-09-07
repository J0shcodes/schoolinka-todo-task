"use client";

import { useEffect, useState, FC } from "react";

import Dates from "./Dates";
import Tasks from "./Tasks";
import AddTaskComponent from "../AddTask";
import EditTaskComponent from "./EditTask";
import TaskPreviewComponent from "../TaskPreview";

interface TodosProps {
  addTask: boolean;
  onClose: () => void
}

const Todos: FC<TodosProps> = ({ addTask, onClose }) => {
  const [editTask, setEditTask] = useState(false)
  const [title, setTitle] = useState<string>("")
  const [previewTask, setPreviewTask] = useState<boolean>(false)

  const onEdit = () => {
    setEditTask(true)
    // setTitle(title)
    setPreviewTask(false)
  }

  const closeEditTask = () => {
    setEditTask(false);
  }

  const onPreview = (title: string) => {
    setPreviewTask(true);
    if(addTask) onClose()
    setTitle(title)
  }

  const closePreviewTask = () => {
    setPreviewTask(false);
  }

  return (
    <div className="mt-8 px-4 flex justify-between gap-6">
      <div className="w-[52.625rem] border-r border-solid border-schoolinka-grey-200 pr-5">
        <Dates />
        <Tasks onPreview={onPreview} previewTask={previewTask} />
      </div>
      {addTask ? <AddTaskComponent onClose={onClose} /> : null}
      {editTask ? <EditTaskComponent onClose={closeEditTask} title={title} /> : null}
      {previewTask ? <TaskPreviewComponent onEdit={onEdit} title={title} onClose={closePreviewTask} /> : null}
    </div>
  );
};

export default Todos;
