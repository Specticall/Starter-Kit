import CategoryPicker from "./CategoryPicker";

export default function NewTaskForm() {
  return (
    <article className="bg-white rounded-md p-8 w-full max-w-[30rem]">
      <p className="font-semibold text-xl border-b border-slate-200 pb-4">
        New Task
      </p>
      <div className="mt-6">
        <p className="mb-2 font-semibold">Title Task</p>
        <input
          type="text"
          className="bg-slate-100 rounded-md px-4 py-3 w-full"
          placeholder="Task Name..."
        />
      </div>
      <CategoryPicker />
      <div className="mt-6">
        <p className="mb-2 font-semibold">Description</p>
        <textarea
          className="resize-none h-32 bg-slate-100 rounded-md px-4 py-3 w-full"
          placeholder="Task Name..."
        ></textarea>
      </div>

      <div className="grid grid-cols-2 mt-8 gap-4">
        <button className="text-blue-600 border border-blue-600 rounded-md py-3 shadow-blue-100 shadow-md font-semibold hover:bg-blue-100 transition-all duration-100 cursor-pointer">
          Cancel
        </button>
        <button className="font-semibold py-3 text-white bg-blue-600 rounded-md hover:bg-blue-400 transition-all duration-100 cursor-pointer">
          Create
        </button>
      </div>
    </article>
  );
}
