import { FunctionalComponent } from "preact";

const Navbar: FunctionalComponent = () => {
  return (
    <nav class="bg-gray-800 text-gray-200 p-4">
      <div class="container mx-auto flex justify-between items-center max-w-screen-md">
        <a href="/" class="text-2xl font-bold hover:text-yellow-300 leading-none">
          Favio Becker 
        </a>
        <ul class="flex space-x-4">
          <li>
            <a href="/" class="hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" class="hover:text-yellow-300">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
