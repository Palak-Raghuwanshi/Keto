
import "./Sidebar.css";
export default function Sidebar({ onSelect }) {
  const items = ["Overview", "Founders", "Competitors", "Vaults"];
  
  return (
    <aside className="w-60 bg-gray-100 h-screen p-4">
      <ul className="space-y-3">
        {items.map(item => (
          <li key={item}>
            <button 
              onClick={() => onSelect(item)} 
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-200"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
