"use client";

import { useState } from "react";
import Image from "next/image";
import firebase from "firebase/app";
import "firebase/firestore"

import PlusIcon from "@/public/icons/plus";
import Todos from "@/components/Todos/Todos";

export default function Home() {

  // const db = 
  const [addTask, setAddTask] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(true);

  const addTaskHandler = () => {
    setAddTask(true);
    setShowCalendar(false)
  };

  const closeAddTask = () => {
    setAddTask(false);
    setShowCalendar(true)
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  const openCalendar = () => {
    setShowCalendar(true);
  };

  return (
    <main className="pt-8 pb-12 px-8 sm:px-4">
      <div className="px-4 md:px-2 flex justify-between sm:block">
        <div>
          <h2 className="text-3xl font-semibold sm:text-2xl text-schoolinka-grey-900">
            Good morning!
          </h2>
          <p className="text-schoolinka-grey-600">You got some task to do.</p>
        </div>
        <div className="w-[11rem] sm:hidden">
          <button
            className="flex justify-between bg-schoolinka-primary text-white rounded-lg py-2.5 px-4 w-full"
            onClick={addTaskHandler}
          >
            <PlusIcon />
            <p className="text-sm">Create New Task</p>
          </button>
        </div>
      </div>
      <Todos
        addTask={addTask}
        onClose={closeAddTask}
        showCalendar={showCalendar}
        closeCalendar={closeCalendar}
        openCalendar={openCalendar}
      />
    </main>
  );
}
