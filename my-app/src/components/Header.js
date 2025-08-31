
import "./Header.css";
export default function Header({ company }) {
  return (
    <header className="p-4 bg-white shadow-md flex items-center justify-between">
      <h1 className="text-2xl font-bold">{company?.name || ""}</h1>
    </header>
  );
}
