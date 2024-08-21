import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

export default function App() {
  return (
    <div className="min-h-screen grid py-12 gap-8 place-items-center bg-slate-100">
      <NewTaskForm />
      <TaskList />
    </div>
  );
}
