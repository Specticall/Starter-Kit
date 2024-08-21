const fakeTask = [
  {
    title: "Meeting with Client",
    description: "Redesign motion graphic",
    category: "personal",
  },
  {
    title: "Finish Project Proposal",
    description: "Write detailed project proposal",
    category: "teams",
  },
  {
    title: "Prepare Presentation",
    description: "Create slides for presentation",
    category: "personal",
  },
  {
    title: "Code Review",
    description: "Review code for bug fixes",
    category: "teams",
  },
  {
    title: "Exercise",
    description: "Go for a run",
    category: "personal",
  },
] as const;

export default function TaskList() {
  return (
    <div className="w-full max-w-[30rem]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold ">Tasks</h3>
        <p className="text-blue-600">Total Task {fakeTask.length}</p>
      </div>
      <ul className=" grid gap-4">
        {fakeTask.map((task) => {
          return (
            <li className="bg-white rounded-md px-8 py-4 grid grid-cols-[1fr_auto]">
              <h3 className="font-semibold">{task.title}</h3>
              <span>
                {task.category === "personal" ? (
                  <i className="bx bx-user text-lg text-slate-500"></i>
                ) : (
                  <i className="bx bx-group text-lg text-slate-500"></i>
                )}
              </span>
              <p className="text-slate-500 col-span-2">{task.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
