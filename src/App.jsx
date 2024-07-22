import "./App.css";

// Components
import Card from "./components/ui/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Images
import AppStore from "./assets/images/AppStore.svg";
import GooglePlay from "./assets/images/GooglePlay.svg";
import TeamMembers from "./components/lists/TeamMembers";
import HeroImage from "./assets/images/body/hero section.png";
import WeaselImage from "./assets/images/body/Meet the cute weasel.png";
import ChallengeImage from "./assets/images/body/Challenge Your Friends!.png";
import FunImage from "./assets/images/body/Make Posture ImprovementFun and Rewarding.png";
import AnalyticsImage from "./assets/images/body/Analytics.png";
import DailyGoalsImage from "./assets/images/body/Set daily goals.png";

function App() {
  return (
    <div className="p-4">
      <section>
        <Card bg=" bg-gradient-to-b from-yellow-100 to-yellow-200">
          <Nav />
          <div className="flex flex-col gap-6">
            <div className="p-2 text-center flex flex-col gap-3">
              <h1 className="text-3xl">Transform Your Posture with WeaUp!</h1>
              <p className="text-sm px-1">
                Say goodbye to neck pain and hello to better health. Improve
                your posture with WeaUp!
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <img src={AppStore} alt="Download on the AppStore" />
              <img src={GooglePlay} alt="Get it on GooglePlay" />
            </div>
            <img src={HeroImage} alt="hero image" className="px-3" />
          </div>
        </Card>
      </section>

      <div>
        <h2 className="text-2xl px-4 py-12 text-center">
          Discover WeaUp&apos;s Unique Features
        </h2>
      </div>

      <section className="grid gap-10">
        <Card bg=" bg-yellow-50">
          <div className="flex flex-col gap-6">
            <div className="px-6 pt-8 flex flex-col gap-3">
              <h1 className="text-xl">Meet the cute weasel</h1>
              <p className="text-sm px-1">
                Have fun keeping your neck in good posture with Weabo who reacts
                in real-time depending on your neck posture.
              </p>
            </div>
            <img src={WeaselImage} alt="hero image" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-coral-50">
          <div className="flex flex-col gap-6">
            <div className="px-6 pt-8 flex flex-col gap-3">
              <h1 className="text-xl">Challenge Your Friends!</h1>
              <p className="text-sm px-1">
                Set common goals with your friends, compete in challenges, and
                support each other in achieving better posture.
              </p>
            </div>
            <img src={ChallengeImage} alt="hero image" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-baltic-green-50">
          <div className="flex flex-col gap-6">
            <div className="px-6 pt-8 flex flex-col gap-3">
              <h1 className="text-xl">
                Make Posture Improvement Fun and Rewarding
              </h1>
              <p className="text-sm px-1">
                Set common goals with your friends, compete in challenges, and
                support each other in achieving better posture.
              </p>
            </div>
            <img src={FunImage} alt="hero image" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-coral-50">
          <div className="flex flex-col gap-6">
            <div className="px-6 pt-8 flex flex-col gap-3">
              <h1 className="text-xl">Analytics</h1>
              <p className="text-sm px-1">
                Gain insights into your posture habits over time. Track your
                progress, understand trends, and make informed adjustments to
                achieve your posture goals effectively.
              </p>
            </div>
            <img src={AnalyticsImage} alt="hero image" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-yellow-50">
          <div className="flex flex-col gap-6">
            <div className="px-6 pt-8 flex flex-col gap-3">
              <h1 className="text-xl">Set daily goals</h1>
              <p className="text-sm px-1">
                Daily goals help you track progress and maintain healthier
                posture habits each day.
              </p>
            </div>
            <img src={DailyGoalsImage} alt="hero image" className="px-3" />
          </div>
        </Card>
      </section>

      <div className="px-4 py-12 text-center">
        <h2 className="text-2xl">The team behind WeaUp</h2>
        <p className="text-sm px-1">Meet the team that brought WeaUp to life</p>
      </div>

      <section className="flex flex-col gap-20">
        <TeamMembers type={"Designer"} />
        <TeamMembers type={"Developer"} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
