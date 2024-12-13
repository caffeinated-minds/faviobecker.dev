import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <body class="bg-gray-200 font-mono leading-loose antialiased">
        <Navbar />
        <div class="px-4 mx-auto container">
          <div class="max-w-screen-md mx-auto items-center justify-center">
            <main class="text-gray-800 pb-4 flex-col space-y-4">
              <h1 class="text-3xl py-4 text-bold">Welcome...</h1>
              <p class="text-sm">
                I discovered code during the first lockdown in the UK and
                absolutely love it.
              </p>

              <p class="text-sm">
                I’m a Junior Software Engineer with a passion for coding,
                currently studying Applied Software Engineering at Cardiff
                University. Proficient in <strong>Java</strong> and{" "}
                <strong>Python</strong>, I have recently picked up{" "}
                <strong>Bash Script</strong> in my spare time and love it.
              </p>

              <p class="text-sm">
                Through my studies I have solid fundamentals in{" "}
                <strong>Vagrant</strong>, <strong>Terraform</strong>,{" "}
                <strong>OOP</strong>-principles, <strong>Java</strong>,{" "}
                <strong>Jenkins</strong>, <strong>SQL</strong>,{" "}
                <strong>TailwindCSS</strong>, and <strong>React</strong>.
              </p>

              <p class="text-sm">
                I am currently working as a Fullstack Chatbot Conversational
                Designer <strong>(adv.)</strong>{" "}
                in FinTech; designing and developing chatbots that enhance
                customer experience.
              </p>

              <p class="text-sm">
                I am motivated, self-driven and solutions-oriented, with a
                desire to pursue a career in DevOps, and I'm eager to apply my
                skills to solve real-world problems.
              </p>
            </main>
          </div>
          <div class="p-8"></div>
        </div>
        <Footer />
      </body>
    </>
  );
}
