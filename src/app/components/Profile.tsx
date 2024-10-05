// app/profile/page.tsx
import { FaUserGraduate, FaLaptopCode, FaBookOpen, FaCertificate } from 'react-icons/fa';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6 space-y-8">
        
        {/* Profile Information Card */}
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaUserGraduate className="mr-2 text-2xl" /> Profile
            </h2>
            <p className="text-lg">
              RANDY B. FAMILARA<br />
              ffaammiillaarraa@gmail.com • 0997-354-7509 • Calapan City, Oriental Mindoro (PH) • 
              <a href="https://linkedin.com/in/randy-familara" className="text-blue-200 hover:underline"> linkedin.com/in/randy-familara</a>
            </p>
          </div>
        </div>

        {/* Professional Summary Card */}
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaLaptopCode className="mr-2 text-2xl" /> Professional Summary
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li>More than 3 years academic and post-academic experience in system analysis, development, implementation, and problem-solving.</li>
              <li>Three years in teaching TESDA programming courses like Java and Web Development.</li>
              <li>Able to teach junior, mid-level, and even senior developers for they are aiming for a solid Java core.</li>
              <li>Able to work in a deadline-driven environment and manage multiple priorities.</li>
              <li>Possesses strong communication skills and commitment to quality.</li>
              <li>Can communicate easily with technical and non-technical personnel.</li>
              <li>Proficient in the English language with strong report writing and communication skills.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaBookOpen className="mr-2 text-2xl" /> Technical Skills
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li><strong>Languages:</strong> Java, C#, PHP, VB.NET</li>
              <li><strong>Technologies:</strong> Spring, Spring Boot, Laravel, React.Js, Next.Js, Node.Js, C#.Net, ASP.Net, MySQL, PostgreSQL, Oracle, GIT, UML, HTML5, CSS3, Tailwind, SQL, Bootstrap, Hibernate, Build tools (Maven/Gradle), Servlets and JSPs, RDBMS, Lombok</li>
              <li><strong>API:</strong> REST, CRUD, JDBC, JPA</li>
              <li><strong>Concepts:</strong> OOP, AOP, Functional Programming</li>
              <li><strong>Others:</strong> Basic Linux, Postman, Tomcat, XAMPP, Laragon</li>
              <li><strong>Ongoing Progress:</strong> Mobile Development (Android Studio), XML, Unit Testing</li>
            </ul>
          </div>
        </div>

        {/* Work Experience Card */}
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaCertificate className="mr-2 text-2xl" /> Work Experience
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li><strong>Programming (Java) NC III Trainer</strong> - Cebu Call Center Academy, Inc. (Nov 2023 – Present)</li>
              <li><strong>Software Engineer</strong> - Ibayad Online Ventures Inc. (May 2023 – Nov 2023)</li>
              <li><strong>Programming (Java) NC III Trainer</strong> - Digital Arts Technology Training Center, Inc. (May 2023 – Apr 2024)</li>
              <li><strong>Programming (Java) NC III Trainer</strong> - Joysis Tech Voc Inc. (May 2021 – Mar 2023)</li>
              <li><strong>Programming (Java) NC III Trainer/Programmer</strong> - BCRV TECH-VOC, INC. (May 2021 – Dec 2022)</li>
              <li><strong>Programming (Java) NC III Trainer</strong> - Matt-Rose Tech Voc, Inc. (Dec 2021 – Jan 2022)</li>
              <li><strong>Web Development Level II Trainer</strong> - BCRV TECH-VOC, INC. (May 2021 – Nov 2021)</li>
              <li><strong>Project-Based Computer Programmer</strong> - LAZVEN CONSULTING SERVICES (Jan 2021 – Apr 2021)</li>
              <li><strong>Administrative Assistant/Toolkeeper</strong> - BCRV TECH-VOC, INC. (Sep 2020 – Dec 2020)</li>
            </ul>
          </div>
        </div>

        {/* Education Card */}
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaBookOpen className="mr-2 text-2xl" /> Education
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li><strong>Bachelor of Science in Computer Science</strong> - CLCC Institute of Computer, Arts & Technology (Jun 2014 - Apr 2018)</li>
            </ul>
          </div>
        </div>

        {/* Certificates Card */}
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaCertificate className="mr-2 text-2xl" /> Certificates
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li>Mastering Laravel with Next.Js</li>
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
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
