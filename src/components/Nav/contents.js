import { NAV_TYPE_PAGE, NAV_TYPE_ICON, NAV_TYPE_BOOTCAMP_DROPDOWN, NAV_TYPE_PAGE_DROPDOWN } from "../../utils/constants";
import linkedInIcon from "../../images/icons/LinkedIn.png";
import github_dark from "../../images/icons/GitHub-Dark.png";
import github_light from "../../images/icons/GitHub-Light.png";
import project_1 from "../../images/web_projects/falcon_finder.png";
import project_2 from "../../images/web_projects/covid_reporter.png";
import weather_dashboard from "../../images/web_projects/weather_dashboard.png";
import work_day_scheduler from "../../images/web_projects/work_day_scheduler.png";
import code_quiz from "../../images/web_projects/code_quiz.png";
import password_generator from "../../images/web_projects/password_generator.png";
import TiltingPoint from "../../pages/TiltingPoint";
import MatchMaker from "../../pages/MatchMaker";
import TapTapCars from "../../pages/TapTapCars";

const Contents = [
    {
        type: NAV_TYPE_PAGE,
        link: "/React-Portfolio",
        text: "About",
        target: "",
    },
    {
        type: NAV_TYPE_PAGE,
        link: "https://drive.google.com/file/d/1GMmSV6qxQJVzaF_5WOTwTSzwphwZ602I/view?usp=sharing",
        text: "Resume",
        target: "_blank",
    },
    {
        type: NAV_TYPE_PAGE_DROPDOWN,
        link: "profExpDropdown",
        text: "Prof Exp",
        drop_content: [
            {
                title: "Tilting Point Media LLC",
                page: <TiltingPoint></TiltingPoint>
            }
        ]
    },
    {
        type: NAV_TYPE_PAGE_DROPDOWN,
        link: "gameDevDropdown",
        text: "Game Dev",
        drop_content: [
            {
                title: "TapTapCars: Traffic Jam!",
                page: <TapTapCars></TapTapCars>
            },
            {
                title: "Match Maker",
                page: <MatchMaker></MatchMaker>
            }
        ]
    },
    {
        type: NAV_TYPE_BOOTCAMP_DROPDOWN,
        link: "webDevDropdown",
        text: "Web Dev",
        drop_content: [
            {
                title: "COVID-19 Reporter",
                link_deploy: "https://tuxedoed-turtles-project-2.herokuapp.com/",
                link_github: "https://github.com/SCastanedaMunoz/Project-2",
                path_screenshot: project_2,
                summary: "For this project, the initial idea was to make a self reporting COVID-19 app where users can go about reporting their COVID-19 status as well as visualizing people's statuses around specific areas on the map.",
            },
            {
                title: "Falcon Finder",
                link_deploy: "https://scastanedamunoz.github.io/Project-1/",
                link_github: "https://github.com/SCastanedaMunoz/Project-1",
                path_screenshot: project_1,
                summary:
                    "For this project, the initial idea was to create a restaurant finder app where we could easily filter out restaurants by area and user information. To achieve this end result, we utilized Google Maps and Zomato Rest API.",
            },
            {
                title: "Weather Dashboard",
                link_deploy: "https://scastanedamunoz.github.io/Weather-Dashboard/",
                link_github: "https://github.com/SCastanedaMunoz/Weather-Dashboard",
                path_screenshot: weather_dashboard,
                summary:
                    "For this project, I took the approach of building in HTML the minimally required elements neeeded to build the layout for the application. As such, I used Javascript and JQuery to dinamically fill up the layout with the corresponding content for each city and weather. In order to fetch weather values based off a city, I utilized the REST API available from https://openweathermap.org. Such API was very easy to use, and I could improve anything on the App would be to have a button to allow users to fetch weather based off their location. Another important aspect of this apps, was utilizing local storage and other utilities in order to keep the user preferences for future visits. In the future, I would like to have some sort of user authentication so each user can have their own customizable weather dashboard.",
            },
            {
                title: "Work Day Scheduler",
                link_deploy: "https://scastanedamunoz.github.io/Work-Day-Scheduler/",
                link_github: "https://github.com/SCastanedaMunoz/Work-Day-Scheduler",
                path_screenshot: work_day_scheduler,
                summary:
                    "For this project, I decided to write as little HTML elements as possible and do everything utilizing only JQuery, Javascript and the Moment.js library. This project main challenge wastaking into consideration that I needed to specifically try to utilize Moment.js as much as possible as my API for date and hour management.",
            },
            {
                title: "Code Quiz",
                link_deploy: "https://scastanedamunoz.github.io/Code-Quiz/",
                link_github: "https://github.com/SCastanedaMunoz/Code-Quiz",
                path_screenshot: code_quiz,
                summary:
                    "For this Code Quiz Game, I decided to use as little hard coded HTML elements as possible, and start only by having an empty bootstrap container where I would be able to add all content. My goal was to create the whole application in just 1 HTML file while using JQuery as much as possible to take full advantage of its capabilities. For this I brokew down in different states, Initial, Questioning, Submitting Score, and Leaderboard, which represent every single section the user can encounter in the app. Each state has its own function to reset the page to an empty state and create the corresponding elements for such app state. This also allowed me to have proper tracking when knowing which was the last user state in the app and have a proper app cycle.",
            },
            {
                title: "Password Generator",
                link_deploy: "https://scastanedamunoz.github.io/Password-Generator/",
                link_github: "https://github.com/SCastanedaMunoz/Password-Generator",
                path_screenshot: password_generator,
                summary:
                    "Password Generator utilizing basic understanding of Javascript and how to manage arrays and other data types as well as communicating data from Javascript into the HTML pages. Creating a password generator was a great way to learn on how passwords can be generated programatically. Additionally, it was pretty interesting to see all of the different options that can be added and provided to users when building a password. I believe as a starting webproject a Password Generator is a greatway in which new developers can understand how to properly code small applications and how to provide better utilities to their users. If I could change anything off the app, I would make it more mobile friendly as well as having all the possible options being part of the UI/UX instead of alerts.",
            },
        ],
    },
    {
        type: NAV_TYPE_ICON,
        icon: github_light,
        icon_light: github_light,
        icon_dark: github_dark,
        link: "https://github.com/SCastanedaMunoz",
        text: "GitHub",
    },
    {
        type: NAV_TYPE_ICON,
        icon: linkedInIcon,
        icon_light: linkedInIcon,
        icon_dark: linkedInIcon,
        link: "https://www.linkedin.com/in/santiagocastanedamunoz",
        text: "LinkedIn",
    },
];

export default Contents;