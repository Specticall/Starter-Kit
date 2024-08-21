export default function CategoryPicker() {
  return (
    <div className="mt-6">
      <p className="mb-2 font-semibold">Category</p>
      <ul className="grid grid-cols-2 bg-slate-100 gap-4 rounded-md px-2 py-2">
        <li className="bg-blue-600 flex items-center justify-center rounded-md py-2 px-4  text-white">
          <i className="bx bx-user mr-2 text-lg"></i>
          Personal
        </li>
        <li className="bg-blue-600 flex items-center justify-center rounded-md py-2 px-4  text-white">
          <i className="bx bx-group mr-2 text-lg"></i>Teams
        </li>
      </ul>
    </div>
  );
}
