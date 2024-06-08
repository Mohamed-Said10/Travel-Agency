// src/components/MenuBar.tsx
const MenuBar = () => {
    return (
      <div className="w-full h-10 bg-gray-800 text-white flex items-center justify-between px-4">
        <div className="text-lg font-bold">Travel Agency</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default MenuBar;
  