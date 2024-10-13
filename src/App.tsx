import { useState } from "react";
import useTheme from "./hooks/useTheme"; // Adjust the path as necessary
import MarkdownViewer from "./MarkdownViewer";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const colorOptions = [
  "#3B82F6", // Blue
  "#F59E0B", // Yellow
  "#10B981", // Green
  "#EF4444", // Red
  "#9333EA", // Purple
  "#F97316", // Orange
];

const App = () => {
  const [isExpanded, setExpanded] = useState(true);
  const [themeColor, changeThemeColor] = useTheme();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="App flex h-screen">
      {/* Side Panel */}
      <aside
        className={`overflow-x-hidden transition-transform duration-300 ease-in-out transform ${
          isExpanded ? "translate-x-0 w-64" : "-translate-x-full w-0"
        } bg-gray-800 text-white relative`}
      >
        <div className="p-4">Search & Filter</div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col bg-gray-100 transition-all duration-300 ease-in-out">
        {/* Header */}
        <header
          className="p-4 sticky top-0 z-10 flex items-center"
          style={{ backgroundColor: themeColor }}
        >
          <button
            onClick={() => setExpanded(!isExpanded)}
            className={`p-2 rounded transition-all duration-300 ease-in-out mr-4`}
            style={{ backgroundColor: themeColor, color: "#fff" }}
          >
            {isExpanded ? (
              <FaChevronLeft size={20} />
            ) : (
              <FaChevronRight size={20} />
            )}
          </button>
          <div className={`flex-grow text-center text-white font-semibold`}>
            Hazel Literature
          </div>
          <div className="relative ml-4">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="p-2 border rounded"
              style={{ backgroundColor: themeColor, color: "#fff" }}
            >
              <IoColorPaletteSharp size={20} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-20">
                {colorOptions.map((color) => (
                  <div
                    key={color}
                    onClick={() => {
                      changeThemeColor(color);
                      setDropdownOpen(false);
                    }}
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
                  >
                    <div
                      className="w-4 h-4 mr-2"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-sm">{color}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="content flex-1 overflow-y-auto p-4">
          <MarkdownViewer fileName="birthday-farewell_t2nh9z.md" />
        </div>

        {/* Footer */}
        <footer
          className="p-4 sticky bottom-0"
          style={{ backgroundColor: themeColor, color: "#fff" }}
        >
          &copy; 2024 Anurag Jaisingh. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default App;
