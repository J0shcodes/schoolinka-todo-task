import { useEffect, useState, useCallback, FC } from "react";
import ReactPaginate from "react-paginate";

import fetchTodos from "@/helper/Todos";
import { Todos } from "@/interfaces/Todos";

interface TasksProps {
  onPreview: (title: string) => void;
  previewTask: boolean;
}

const Tasks: FC<TasksProps> = ({
  onPreview,
  previewTask,
}) => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<number>();

  const itemsPerPage = 10;

  // Gets the return value from the fetchTodos function
  const getTodos = useCallback(async () => {
    const result = await fetchTodos();

    if (Array.isArray(result)) {
      setTodos(result);
      setTotalPages(Math.ceil(todos.length / itemsPerPage));
      console.log(totalPages);
    } else {
      setError(result);
      console.log(error);
    }
  }, [setError, setTodos, error, todos.length, totalPages]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = todos.slice(startIndex, endIndex);

  const handlePageSelected = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  if (isChecked) {
    console.log("checked");
  }

  function todoClickHandler(id: number, title: string) {
    console.log(id);
    setSelectedTodo(id);
    // onEdit(title)
    onPreview(title);
  }

  return (
    <div className="mt-8">
      <h1 className="font-semibold text-schoolinka-grey-900">My Tasks</h1>
      <div className="border-b border-solid border-schoolinka-grey-200 pb-2 mt-4">
        {subset.map((todo) => (
          <div
            key={todo.id}
            className={
              previewTask && todo.id === selectedTodo
                ? "flex justify-between bg-[#eaedfe] px-[1.5rem] py-[1rem] mb-4"
                : "flex justify-between bg-[#f9fafb] px-[1.5rem] py-[1rem] mb-4"
            }
            onClick={() => todoClickHandler(todo.id, todo.title)}
          >
            <div className="flex justify-between gap-8">
              <div className="relative flex flex-col justify-center">
                {/* <label> */}
                <input
                  className={
                    "cursor-pointer absolute w-[1.25rem] h-[1.25rem] z-50 opacity-0"
                  }
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked((prev) => !prev)}
                />
                <span
                  className={
                    isChecked
                      ? "w-[1.25rem] h-[1.25rem] border border-solid border-schoolinka-primary rounded-md absolute after:absolute after:content-[''] after:w-[0.583125rem] after:h-[0.40125rem] after:border-solid after:border-t-0 after:border-r-0 after:border-b-2 after:border-l-2 after:border-schoolinka-primary after:rotate-[-45deg] after:left-1 after:top-1 after:block"
                      : "w-[1.25rem] h-[1.25rem] border border-solid border-[#d0d5dd] rounded-md absolute after:absolute after:content-[''] after:w-[0.583125rem] after:h-[0.40125rem] after:border-solid after:border-2 after:border-schoolinka-primary after:rotate-[-45deg] after:left-1 after:top-1 after:hidden"
                  }
                ></span>
                {/* </label> */}
              </div>
              <div>
                <p className="text-sm text-schoolinka-grey-900">{todo.title}</p>
                <p className="text-schoolinka-grey-600 text-sm">
                  10:30 am - 11:30 am
                </p>
              </div>
            </div>
            <div className="text-schoolinka-grey-600 text-sm flex flex-col justify-center">
              Today
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        pageCount={10}
        onPageChange={handlePageSelected}
        forcePage={currentPage}
        nextLabel={`Next ->`}
        previousLabel={"<- Previous"}
        containerClassName="container"
        activeLinkClassName="active"
      />
    </div>
  );
};

export default Tasks;
