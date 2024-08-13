import routes from "./routes";

// Components
import Card from "./components/ui/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Images
import TeamMembers from "./components/lists/TeamMembers";
import HeroImageMobile from "./assets/images/body/hero section-mobile.png";
import HeroImageDesktop from "./assets/images/body/hero section-desktop.png";
import WeaselImage from "./assets/images/body/Meet the cute weasel.png";
import ChallengeImage from "./assets/images/body/Challenge Your Friends!.png";
import FunImage from "./assets/images/body/Make Posture ImprovementFun and Rewarding.png";
import AnalyticsImage from "./assets/images/body/Analytics.png";
import DailyGoalsImage from "./assets/images/body/Set daily goals.png";
import CheckCircle from "./assets/images/icons/CheckCircle.svg";
import W from "./assets/images/body/W.svg";

function App() {
  return (
    <div className="p-4 lg:max-w-[87rem] lg:mx-auto">
      <section id="About" className="relative">
        <div className="rounded absolute inset-0 -z-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-yellow-200 h-full w-full"></div>
        </div>

        <div className="absolute inset-0 top-10 flex justify-center -z-20">
          <img src={W} aria-hidden="true" className="lg:max-w-[57rem]" />
        </div>

        <div className="relative z-30 lg:px-12 lg:pt-12">
          <Nav />
          <div className="flex flex-col gap-6 lg:absolute lg:inset-x-0 z-30">
            <div className="p-2 text-center flex flex-col gap-3 lg:max-w-[46%] lg:mx-auto">
              <h1 className="text-3xl lg:text-4xl">
                Transform Your Posture with WeaUp
              </h1>
              <p className="text-sm px-1 lg:text-m-l text-neutral-600">
                Say goodbye to neck pain and hello to better health. Improve
                your posture with WeaUp!
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <ul className="flex items-center justify-center text-m mb-12">
                <li>
                  <a
                    href={routes[3].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[6.25rem] bg-baltic-green-600 text-white text-s-l py-4 px-8 h-14"
                  >
                    {routes[3].title}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <img
            src={HeroImageMobile}
            aria-hidden="true"
            className="block lg:hidden px-3 pt-2 z-20 relative"
          />

          <img
            src={HeroImageDesktop}
            aria-hidden="true"
            className="hidden lg:block px-3 pt-24 z-20 relative"
          />
        </div>
      </section>

      <div id="Features">
        <h2 className="text-2xl px-4 pt-16 pb-12 text-center lg:text-2xl-l lg:pt-28 lg:pb-20">
          Discover WeaUp&apos;s Unique Features
        </h2>
      </div>

      <section className="grid gap-10 lg:grid-cols-5 lg:px-14">
        <Card bg="bg-yellow-50 lg:col-span-2 lg:max-h-[35rem]">
          <div className="flex flex-col gap-6 lg:justify-between lg:h-full lg:pt-4 lg:px-6">
            <div className="px-6 pt-8 flex flex-col gap-3 lg:flex-grow">
              <h3 className="text-xl lg:text-3xl-l">Meet the cute weasel</h3>
              <p className="text-sm px-1 lg:text-base text-neutral-500">
                Have fun keeping your neck in good posture with Weabo who reacts
                in real-time depending on your neck posture.
              </p>
            </div>
            <img src={WeaselImage} aria-hidden="true" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-coral-50 lg:col-span-3 lg:max-h-[35rem] overflow-hidden">
          <div className="flex flex-col gap-6 lg:justify-between lg:h-full lg:pt-4 lg:px-6">
            <div className="px-6 pt-8 flex flex-col gap-3 lg:flex-grow">
              <h3 className="text-xl lg:text-3xl-l">Challenge Your Friends!</h3>
              <p className="text-sm px-1 lg:text-base text-neutral-500">
                Set common goals with your friends, compete in challenges, and
                support each other in achieving better posture.
              </p>
            </div>
            <img src={ChallengeImage} aria-hidden="true" className="px-3" />
          </div>
        </Card>

        <Card bg="bg-baltic-green-50 lg:col-span-5 lg:max-h-[35rem]">
          <div className="flex flex-col gap-6 lg:flex-row lg:pt-20 lg:px-10">
            <div className="px-6 pt-8 flex flex-col gap-3 lg:gap-8">
              <h3 className="text-xl lg:text-3xl-l">
                Make Posture Improvement Fun and Rewarding
              </h3>
              <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                  <img src={CheckCircle} alt="check" className="h-max" />
                  <div>
                    <h4 className="text-s px-1 lg:text-s-l">
                      Challenge Yourself
                    </h4>
                    <p className="text-sm px-1 lg:text-base text-neutral-500">
                      Push your limits and earn rewards as you progress.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={CheckCircle} alt="check" className="h-max" />
                  <div>
                    <h4 className="text-s px-1 lg:text-s-l">Stay Motivated</h4>
                    <p className="text-sm px-1 lg:text-base text-neutral-500">
                      Track your achievements and celebrate your successes with
                      friends.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={CheckCircle} alt="check" className="h-max" />
                  <div>
                    <h4 className="text-s px-1 lg:text-s-l">
                      Build Healthy Habits
                    </h4>
                    <p className="text-sm px-1 lg:text-base text-neutral-500">
                      Use gamification to develop and maintain better posture
                      habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={FunImage}
              aria-hidden="true"
              className="px-3 lg:max-w-[36.82556rem] lg:pr-12"
            />
          </div>
        </Card>

        <Card bg=" bg-coral-50 lg:col-span-3 lg:max-h-[35rem] overflow-hidden">
          <div className="flex flex-col gap-6 lg:pt-4 lg:px-6">
            <div className="px-6 pt-8 flex flex-col gap-3">
              <h3 className="text-xl lg:text-3xl-l">Analytics</h3>
              <p className="text-sm px-1 lg:text-base text-neutral-500">
                Gain insights into your posture habits over time. Track your
                progress, understand trends, and make informed adjustments to
                achieve your posture goals effectively.
              </p>
            </div>
            <img src={AnalyticsImage} aria-hidden="true" className="px-3" />
          </div>
        </Card>

        <Card bg=" bg-yellow-50 lg:col-span-2 lg:max-h-[35rem]">
          <div className="flex flex-col gap-6 lg:justify-between lg:h-full lg:pt-4 lg:px-6">
            <div className="px-6 pt-8 flex flex-col gap-3 lg:flex-grow">
              <h3 className="text-xl lg:text-3xl-l">Set daily goals</h3>
              <p className="text-sm px-1 lg:text-base text-neutral-500">
                Daily goals help you track progress and maintain healthier
                posture habits each day.
              </p>
            </div>
            <img src={DailyGoalsImage} aria-hidden="true" className="px-3" />
          </div>
        </Card>
      </section>

      <div className="px-4 py-[5.5rem] text-center lg:pt-48 lg:pb-16" id="Team">
        <h2 className="text-2xl lg:text-2xl-l lg:pb-4">
          The team behind WeaUp
        </h2>
        <p className="text-sm px-1 lg:text-base text-neutral-500">
          Meet the team that brought WeaUp to life
        </p>
      </div>

      <section className="flex flex-col gap-20 lg:px-14">
        <TeamMembers type={"Designer"} />
        <TeamMembers type={"Developer"} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
