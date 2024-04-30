import useSidebarStore from "@/store/layoutStore";
const Header = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <div className="w-full h-20 bg-gray-700 text-orange-600">
     
      <button onClick={toggleSidebar} className="mt-3 ml-3">
        <div>
          Header
        </div>
        Toggle Menu
      </button>
    </div>
  );
};
export default Header;
