"use client";

import {
  FaUserGraduate,
  FaLaptopCode,
  FaBookOpen,
  FaCertificate,
} from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown, FaTrophy } from "react-icons/fa";
import { useState } from "react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Profile", icon: <FaUserGraduate />, content: ProfileContent() },
    {
      title: "Professional Summary",
      icon: <FaLaptopCode />,
      content: ProfessionalSummaryContent(),
    },
    {
      title: "Technical Skills",
      icon: <FaBookOpen />,
      content: TechnicalSkillsContent(),
    },
    {
      title: "Work Experience",
      icon: <FaCertificate />,
      content: WorkExperienceContent(),
    },
    { title: "Education", icon: <FaBookOpen />, content: EducationContent() },
    {
      title: "Certificates",
      icon: <FaCertificate />,
      content: CertificatesContent(),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6 space-y-8">
        {/* Tab Navigation */}
        <div className="tabs tabs-boxed justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab tab-lg ${
                activeTab === index ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex items-center">
                <span>{tab.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

const ProfileContent = () => (
  <div className="p-4 border rounded-lg shadow-md bg-white">
    <h2 className="card-title text-xl text-accent font-bold flex items-center">
      <FaUserGraduate className="mr-2 text-2xl" /> Profile
    </h2>
    <div className="text-lg">
      <h3 className="font-semibold">RANDY B. FAMILARA</h3>
      <p>
        <strong className="text-secondary">Email: </strong>
        <a
          href="mailto:ffaammiillaarraa@gmail.com"
          className="text-blue-500 hover:underline"
        >
          ffaammiillaarraa@gmail.com
        </a>
        <br />
        <strong className="text-secondary">Phone: </strong> 0997-354-7509
        <br />
        <strong className="text-secondary">Location: </strong> Calapan City,
        Oriental Mindoro, PH
        <br />
        <strong className="text-secondary">LinkedIn: </strong>
        <a
          href="https://linkedin.com/in/randy-familara"
          className="text-blue-500 hover:underline"
        >
          @randy-familara
        </a>
      </p>
    </div>
    <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold flex items-center">
                <FaThumbsUp className="mr-2 text-2xl" /> Likes
              </h2>
              <ul className="list-disc ml-6 text-lg">
                <li>Learning new programming languages</li>
                <li>Teaching and mentoring</li>
                <li>Collaborating on projects</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold flex items-center">
                <FaThumbsDown className="mr-2 text-2xl" /> Dislikes
              </h2>
              <ul className="list-disc ml-6 text-lg">
                <li>Unclear project requirements</li>
                <li>Negativity in the workplace</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold flex items-center">
                <FaTrophy className="mr-2 text-2xl" /> Achievements
              </h2>
              <ul className="list-disc ml-6 text-lg">
                <li>Best Programmer 2018</li>
                <li>Best Thesis 2018</li>
              </ul>
            </div>
          </div>
  </div>
);

const ProfessionalSummaryContent = () => (
  <div className="p-4 border rounded-lg shadow-md bg-white">
    <h2 className="card-title text-xl text-accent font-bold flex items-center">
      <FaLaptopCode className="mr-2 text-2xl" /> Professional Summary
    </h2>
    <ul className="ml-6 text-lg space-y-2">
      {[
        "Over 3 years of academic and post-academic experience in system analysis, development, implementation, and problem-solving.",
        "Three years of teaching TESDA programming courses such as Java and Web Development.",
        "Proficient in teaching junior, mid-level, and senior developers, focusing on building a solid Java foundation.",
        "Experienced in working within a deadline-driven environment while managing multiple priorities.",
        "Strong communication skills with a commitment to quality and professionalism.",
        "Capable of effectively communicating with both technical and non-technical personnel.",
        "Proficient in English, with strong report writing and communication skills.",
      ].map((item, index) => (
        <li
          key={index}
          className="flex items-start p-2 transition-all duration-200 hover:bg-gray-100 rounded-lg"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const TechnicalSkillsContent = () => (
  <div className="p-4 border rounded-lg shadow-md bg-white">
    <h2 className="card-title text-xl text-accent font-bold flex items-center">
      <FaBookOpen className="mr-2 text-2xl" /> Technical Skills
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg text-secondary">Languages</h3>
          <p className="text-lg">Java, C#, PHP, VB.NET</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg text-secondary">Technologies</h3>
          <p className="text-lg">
            Spring, Spring Boot, Laravel, React.js, Next.js, Node.js, C#.NET,
            ASP.NET, MySQL, PostgreSQL, Oracle, GIT, UML, HTML5, CSS3, Tailwind,
            SQL, Bootstrap, Hibernate, Maven/Gradle, Servlets and JSPs, RDBMS,
            Lombok
          </p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg text-secondary">API</h3>
          <p className="text-lg">REST, CRUD, JDBC, JPA</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg text-secondary">Concepts</h3>
          <p className="text-lg">OOP, AOP, Functional Programming</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg text-secondary">Others</h3>
          <p className="text-lg">
            Basic Linux, Postman, Tomcat, XAMPP, Laragon
          </p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h3 className="font-bold text-lg text-secondary">Ongoing Progress</h3>
          <p className="text-lg">
            Mobile Development (Android Studio), XML, Unit Testing
          </p>
        </div>
      </div>
    </div>
  </div>
);

const WorkExperienceContent = () => (
  <>
    <h2 className="card-title text-xl text-accent font-bold flex items-center">
      <FaCertificate className="mr-2 text-2xl" /> Work Experience
    </h2>
    <ul className="timeline timeline-vertical timeline-end">
      <li>
        <div className="timeline-start">Nov 2023 – Present</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">
          <strong className="text-secondary">Technical Trainer</strong>
          <br />
          Cebu Call Center Academy, Inc.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className="timeline-start">May 2023 – Nov 2023</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">
          <strong className="text-secondary">Software Engineer</strong>
          <br />
          Ibayad Online Ventures Inc.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className="timeline-start">May 2023 – Apr 2024</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">
          <strong className="text-secondary">Technical Trainer</strong>
          <br />
          Digital Arts Technology Training Center, Inc.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className="timeline-start">May 2021 – Mar 2023</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">
          <strong className="text-secondary">Technical Trainer</strong>
          <br />
          Joysis Tech Voc Inc.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className="timeline-start">May 2021 – Dec 2022</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">
          <strong className="text-secondary">
            Technical Trainer/Programmer
          </strong>
          <br />
          BCRV TECH-VOC, INC.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className="timeline-start">Dec 2021 – Jan 2022</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">
          <strong className="text-secondary">Technical Trainer</strong>
          <br />
          Matt-Rose Tech Voc, Inc.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className="timeline-start">May 2021 – Nov 2021</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">
          <strong className="text-secondary">
            Web Development Level II Trainer
          </strong>
          <br />
          BCRV TECH-VOC, INC.
        </div>
        <hr />
      </li>

      <li>
        <hr />
        <div className="timeline-start">Jan 2021 – Apr 2021</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">
          <strong className="text-secondary">Stock Custodian</strong>
          <br />
          Star Honda, Inc.
        </div>
      </li>
    </ul>
  </>
);

const EducationContent = () => (
  <div className="p-4 border rounded-lg shadow-md bg-white">
    <h2 className="card-title text-xl text-accent font-bold flex items-center">
      <FaBookOpen className="mr-2 text-2xl" /> Education
    </h2>
    <div className="text-lg">
      <h2 className="font-semibold">Bachelor of Science in Computer Science</h2>
      <p>
        CLCC Institute of Computer, Arts & Technology
        <br />
        Calapan City, Oriental Mindoro
        <br />
        <i>June 2014 - April 2018</i>
      </p>
      <div className="mt-2">
        <strong className="text-secondary">Courses:</strong>
        <ul className="list-disc ml-6">
          <li>Object-Oriented Programming (OOP)</li>
          <li>Data Structures</li>
          <li>Algorithms</li>
          <li>Operating Systems</li>
          <li>Web Design Standards and Workflows</li>
        </ul>
      </div>
      <div className="mt-2">
        <strong className="text-secondary">Awards:</strong>
        <ul className="list-disc ml-6">
          <li>Best Programmer 2018</li>
          <li>Best Thesis 2018</li>
          <li>Academic Meritorious/Excellence Award</li>
        </ul>
      </div>
      <div className="mt-2">
        <strong className="text-secondary">Others:</strong>
        <ul className="list-disc ml-6">
          <li>Former Editor-in-Chief of Campus Publication (The MODEM)</li>
          <li>Created the “The MODEM” official logo</li>
          <li>Varsity (Table Tennis, Chess)</li>
        </ul>
      </div>
    </div>
  </div>
);

const CertificatesContent = () => (
  <div className="p-4 border rounded-lg shadow-md bg-white">
    <h2 className="card-title text-xl text-accent font-bold flex items-center">
      <FaCertificate className="mr-2 text-2xl" /> Certificates
    </h2>
    <ul className="list-disc ml-6 text-lg space-y-2">
      <li>Mastering Laravel with Next.js</li>
      <li>Oracle Certified Associate, Java SE 8 Programmer</li>
      <li>Scrum Foundation Professional Certification (SFPC)</li>
      <li>Civil Service Professional Level</li>
      <li>National Certificate III in Programming (JAVA)</li>
      <li>National TVET Trainer Certificate I - Java</li>
      <li>Facilitate eLearning Sessions (FeLS)</li>
      <li>Trainers Methodology (TM) I</li>
      <li>Web Development Level II</li>
    </ul>
  </div>
);
