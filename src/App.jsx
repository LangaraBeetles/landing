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
import CheckCircle from "./assets/images/icons/CheckCircle.svg";

function App() {
  return (
    <div className="p-4 lg:max-w-[87rem] lg:mx-auto">
      <section id="About">
        <Card bg=" bg-gradient-to-b from-yellow-100 to-yellow-200 lg:relative">
          <Nav />
          <div className="flex flex-col gap-6 lg:absolute lg:inset-x-0">
            <div className="p-2 text-center flex flex-col gap-3 lg:max-w-[46%] lg:mx-auto">
              <h1 className="text-3xl md:text-4xl">
                Transform Your Posture with WeaUp!
              </h1>
              <p className="text-sm px-1 md:text-base">
                Say goodbye to neck pain and hello to better health. Improve
                your posture with WeaUp!
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <img
                src={AppStore}
                className="lg:h-[2.58331rem] lg:w-[8.84294rem] h-8"
                alt="Download on the AppStore"
              />
              <img
                src={GooglePlay}
                className="lg:h-[2.58331rem] lg:w-[8.84294rem] h-8"
                alt="Get it on GooglePlay"
              />
            </div>
          </div>
          <img src={HeroImage} alt="hero image" className="px-3 pt-14" />
        </Card>
      </section>

      <div id="Features">
        <h2 className="text-2xl px-4 py-12 text-center">
          Discover WeaUp&apos;s Unique Features
        </h2>
      </div>

      <section className="grid gap-10 md:grid-cols-3">
        <Card bg=" bg-yellow-50 md:max-h-[35rem]">
          <div className="flex flex-col gap-6 md:justify-between md:h-full">
            <div className="px-6 pt-8 flex flex-col gap-3 md:flex-grow">
              <h3 className="text-xl md:text-3xl-l">Meet the cute weasel</h3>
              <p className="text-sm px-1 md:text-base">
                Have fun keeping your neck in good posture with Weabo who reacts
                in real-time depending on your neck posture.
              </p>
            </div>
            <img src={WeaselImage} alt="hero image" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-coral-50 md:col-span-2 md:max-h-[35rem] overflow-hidden">
          <div className="flex flex-col gap-6 md:justify-between md:h-full">
            <div className="px-6 pt-8 flex flex-col gap-3 md:flex-grow">
              <h3 className="text-xl md:text-3xl-l">Challenge Your Friends!</h3>
              <p className="text-sm px-1 md:text-base">
                Set common goals with your friends, compete in challenges, and
                support each other in achieving better posture.
              </p>
            </div>
            <img src={ChallengeImage} alt="hero image" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-baltic-green-50 md:col-span-3 md:max-h-[35rem]">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="px-6 pt-8 flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl-l">
                Make Posture Improvement Fun and Rewarding
              </h3>
              <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                  <img src={CheckCircle} alt="check" className="h-max" />
                  <div>
                    <h4 className="text-s px-1">Challenge Yourself</h4>
                    <p className="text-sm px-1 md:text-base">
                      Push your limits and earn rewards as you progress.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={CheckCircle} alt="check" className="h-max" />
                  <div>
                    <h4 className="text-s px-1">Stay Motivated</h4>
                    <p className="text-sm px-1 md:text-base">
                      Track your achievements and celebrate your successes with
                      friends.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={CheckCircle} alt="check" className="h-max" />
                  <div>
                    <h4 className="text-s px-1">Build Healthy Habits</h4>
                    <p className="text-sm px-1 md:text-base">
                      Use gamification to develop and maintain better posture
                      habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={FunImage}
              alt="hero image"
              className="px-3 md:max-w-[36.82556rem]"
            />
          </div>
        </Card>

        <Card bg=" bg-coral-50 md:col-span-2 md:max-h-[35rem] overflow-hidden">
          <div className="flex flex-col gap-6">
            <div className="px-6 pt-8 flex flex-col gap-3">
              <h3 className="text-xl md:text-3xl-l">Analytics</h3>
              <p className="text-sm px-1 md:text-base">
                Gain insights into your posture habits over time. Track your
                progress, understand trends, and make informed adjustments to
                achieve your posture goals effectively.
              </p>
            </div>
            <img src={AnalyticsImage} alt="hero image" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-yellow-50 md:max-h-[35rem]">
          <div className="flex flex-col gap-6 md:justify-between md:h-full">
            <div className="px-6 pt-8 flex flex-col gap-3 md:flex-grow">
              <h3 className="text-xl md:text-3xl-l">Set daily goals</h3>
              <p className="text-sm px-1 md:text-base">
                Daily goals help you track progress and maintain healthier
                posture habits each day.
              </p>
            </div>
            <img src={DailyGoalsImage} alt="hero image" className="px-3" />
          </div>
        </Card>
      </section>

      <div className="px-4 py-12 text-center" id="Team">
        <h2 className="text-2xl">The team behind WeaUp</h2>
        <p className="text-sm px-1 md:text-base">
          Meet the team that brought WeaUp to life
        </p>
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
