import useSidebarStore from "@/store/layoutStore";
const Header = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <div className="w-full h-20 bg-gray-700 text-white flex justify-between items-center px-4">
      <div>
        <span className="font-bold text-lg">Header</span>
      </div>
      <button onClick={toggleSidebar} className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-4 rounded">
        Toggle Menu
      </button>
    </div>
  );
};

export default Header;
