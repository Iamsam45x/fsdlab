import "./App.css";
import Navbar from "./components/Navbar.jsx";
import WelcomeHeader from "./components/WelcomeHeader.jsx";
import LearnerCard from "./components/LearnerCard.jsx";
import TopicList from "./components/TopicList.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const learners = [
    {
      id: 1,
      name: "Sam Lanka",
      role: "Frontend Learner",
      skill: "HTML and CSS",
      active: true,
    },
    {
      id: 2,
      name: "Subash chandrabose",
      role: "JavaScript Learner",
      skill: "JavaScript",
      active: false,
    },
    {
      id: 3,
      name: "Aryabhata",
      role: "React Beginner",
      skill: "Bootstrap",
      active: true,
    },
  ];

  const topics = ["JSX", "Components", "Props", "State", "Hooks"];

  return (
    <div className="app">
      <Navbar />

      <main>
        <WelcomeHeader />

        <section className="container my-4">
          <h2 className="text-center mb-4">Learners</h2>
          {learners.length === 0 ? (
            <div className="alert alert-warning">No learners available.</div>
          ) : (
            <div className="row g-4">
              {learners.map((learner) => (
                <div className="col-12 col-md-4" key={learner.id}>
                  <LearnerCard
                    name={learner.name}
                    role={learner.role}
                    skill={learner.skill}
                    active={learner.active}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="container my-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <TopicList topics={topics} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
