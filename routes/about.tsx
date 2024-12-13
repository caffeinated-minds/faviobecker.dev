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
              <header>
                <h1 class="text-3xl py-4 text-bold">About me...</h1>
                <h2 class="text-2xl py-2 text-bold">
                  Software Developer
                </h2>
                <p class="p-2 text-sm">
                  I’m a software developer with a keen interest in DevOps,
                  currently studying my third year in BSc (Hons) Applied
                  Software Engineering at Cardiff University. I am proficient in
                  Python, Java, and JavaScript.
                </p>
                <p class="p-2 text-sm">
                  I am currently working as a Chatbot Conversational Designer
                  (Adv.) at Admiral Insurance (Digital); designing and
                  developing chatbots that enhance customer experience.
                </p>
                <p class="p-2 text-sm">
                  I am motivated, self-driven, and solutions-oriented, with a
                  desire to move into Cybersecurity, to learn new technologies,
                  and eager to apply my skills to solve real-world problems.
                </p>
              </header>

              <section class="section">
                <h2 class="text-2xl py-2 text-bold">Skills</h2>
                <p class="p-2 text-sm">
                  Strong communication and writing skills; fluent in English and
                  German.
                </p>
                <p class="p-2 text-sm">
                  Proficient in Open Stack, Jenkins, Terraform, Linux, Python
                  (Flask, Jinja2), Java (Spring Boot, Thymeleaf), JavaScript
                  (Node.js, Deno), HTMX, React, MySQL, SQL, and more.
                </p>
              </section>

              <section class="section">
                <h2 class="text-2xl py-2 text-bold">Experience</h2>
                <h3 class="py-2">
                  <strong>
                    Admiral Insurance / Chatbot Conversational Designer
                  </strong>
                </h3>
                <p class="text-sm">
                  (August 2022 - PRESENT, Cardiff)
                </p>
                <p class="text-sm p-4">
                  Building new bots, greenfielding solutions for current dev
                  bottlenecks. Conversational designer, with a data-driven
                  approach and focus on implementation and maintainability of
                  business-oriented solutions.
                </p>

                <h3 class="py-2">
                  <strong>
                    Admiral Insurance / Consultant
                  </strong>
                </h3>
                <p class="text-sm">
                  (March 2021 - August 2022, Cardiff)
                </p>
                <p class="text-sm p-4">
                  Front-line customer support on phone lines. Repeated top
                  performer in the department, with excellent customer feedback
                  scores.
                </p>
              </section>

              <section class="section">
                <h2 class="text-2xl py-2 text-bold">Education</h2>
                <h3 class="py-2">
                  <strong>
                    Cardiff University / BSc(Hons) Applied Software Engineering
                  </strong>
                </h3>
                <p class="text-sm">
                  (September 2022 - June 2025, Cardiff)
                </p>
                <p class="text-sm p-2">
                  Full-time study in Apprenticeship Degree Program, under
                  Cardiff University's School of Computer Science and
                  Informatics.
                </p>

                <h3 class="py-2">
                  <strong>
                    ABDO College Kent / FBDO Ophthalmic Dispensing
                  </strong>
                </h3>
                <p class="text-sm">
                  (September 2016 - June 2018, Kent)
                </p>
                <p class="text-sm p-2">
                  Full-time study and work for 2 years. Worked as a Dispensing
                  Optician at a large store in Cardiff, responsible for clinical
                  supervision, documentation, and staff training.
                </p>
              </section>

              <section class="section">
                <h2 class="text-2xl py-2 text-bold">Hobbies</h2>
                <p class="p-2 text-sm">
                  I love to build projects in my spare time, and am currently
                  following online training for the{" "}
                  <strong>
                    Red Hat Certified System Administrator (RHCSA) RHEL 9
                  </strong>. I enjoy improving my NeoVim config, solving puzzles
                  of any kind, fish keeping, going to the gym, practicing zen
                  meditation, and yoga.
                </p>
              </section>
            </main>
          </div>
          <div class="p-8"></div>
        </div>
        <Footer />
      </body>
    </>
  );
}
