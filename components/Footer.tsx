import { h } from "preact";

export default function Footer() {
  return (
    <footer class="bg-gray-800 py-4 text-center bottom-0 w-full fixed">
      <div class="container mx-auto max-w-screen-md">
        <a
          href="https://github.com/caffeinated-minds"
          target="_blank"
          class="mx-4 text-gray-200 font-bold hover:text-yellow-300"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/favio-becker-7540b3208/"
          target="_blank"
          class="mx-4 text-gray-200 font-bold hover:text-yellow-300"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/caffeine_minds"
          target="_blank"
          class="mx-4 text-gray-200 font-bold hover:text-yellow-300"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
