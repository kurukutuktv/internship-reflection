import { FaComments, FaClock, FaLightbulb, FaUserFriends, FaThumbsUp, FaAward } from 'react-icons/fa';

export default function ReflectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 space-y-4">
        
        {/* Reflection Page Card */}
        <div className="card bg-base-100 shadow-lg transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <span className='text-accent'><FaComments className="mr-2 text-2xl" /> My Reflection</span>
            </h2>

            {/* Grid layout for 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

              {/* Column 1 */}
              <div>
                <div className="collapse collapse-arrow bg-base-100 text-base-content">
                  <input type="checkbox" />
                  <div className="collapse-title font-semibold flex items-center">
                    <FaUserFriends className="mr-2 text-xl" />  
                  </div>
                  <div className="collapse-content bg-accent text-base-300">
                    <p className="text-right">The department focuses on software development, utilizing Agile methodologies to enhance productivity and quality.</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 text-base-content mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title font-semibold flex items-center">
                    <FaClock className="mr-2 text-xl" /> Time Management
                  </div>
                  <div className="collapse-content bg-accent text-base-300">
                    <p>I logged over 600 hours of productive work, focusing on key deliverables and meeting deadlines.</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 text-base-content mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title font-semibold flex items-center">
                    <FaAward className="mr-2 text-xl" /> Memorable Experience
                  </div>
                  <div className="collapse-content bg-accent text-base-300">
                    <p>The most memorable event was the final demo of the output, which fostered better relationships and connectivity among individuals.</p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <div className="collapse collapse-arrow bg-base-100 text-base-content">
                  <input type="checkbox" />
                  <div className="collapse-title font-semibold flex items-center">
                    <FaThumbsUp className="mr-2 text-xl" /> My Contribution
                  </div>
                  <div className="collapse-content bg-accent text-base-300">
                    <p>I contributed by streamlining processes and enhancing team collaboration through effective communication.</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 text-base-content mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title font-semibold flex items-center">
                    <FaLightbulb className="mr-2 text-xl" /> Key Learnings
                  </div>
                  <div className="collapse-content bg-accent text-base-300">
                    <p>I learned the importance of adaptability, teamwork, and continuous learning in a fast-paced environment.</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 text-base-content mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title font-semibold flex items-center">
                    <FaComments className="mr-2 text-xl" /> Recommendations
                  </div>
                  <div className="collapse-content bg-accent text-base-300">
                    <p>I recommend more team-building activities to strengthen collaboration and morale.</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 text-base-content mt-4">
                  <input type="checkbox" />
                  <div className="collapse-title font-semibold flex items-center">
                    <FaLightbulb className="mr-2 text-xl" /> Advice for Future Interns
                  </div>
                  <div className="collapse-content bg-accent text-base-300">
                    <p>Be proactive, ask questions, and embrace challenges. Your growth is in your hands.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
