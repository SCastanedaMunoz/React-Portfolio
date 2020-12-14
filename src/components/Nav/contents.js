import { NAV_TYPE_PAGE, NAV_TYPE_ICON, NAV_TYPE_DROPDOWN } from "../../utils/constants";
import linkedInIcon from "../../images/icons/LinkedIn.png";
import github_dark from "../../images/icons/GitHub-Dark.png";
import github_light from "../../images/icons/GitHub-Light.png";
import project_1 from "../../images/web_projects/falcon_finder.png";
import project_2 from "../../images/web_projects/covid_reporter.png";
import weather_dashboard from "../../images/web_projects/weather_dashboard.png";
import work_day_scheduler from "../../images/web_projects/work_day_scheduler.png";
import code_quiz from "../../images/web_projects/code_quiz.png";
import password_generator from "../../images/web_projects/password_generator.png";

const Contents = [
    {
        type: NAV_TYPE_PAGE,
        link: "/React-Portfolio",
        text: "About",
        target: "",
    },
    {
        type: NAV_TYPE_PAGE,
        link: "https://drive.google.com/file/d/1-x6nO7vAsd0makzaCQCj2sXypM5dkCvs/view?usp=sharing",
        text: "Resume",
        target: "_blank",
    },
    {
        type: NAV_TYPE_DROPDOWN,
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
                    "For this project, I took the approach of building in HTML the minimally required elements neeeded to build the layout for the application. As such, I used Javascript and JQuery to dinamically fill up the layout with the corresponding content for each city and weather.",
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
                    "Password Generator utilizing basic understanding of Javascript and how to manage arrays and other data types as well as communicating data from Javascript into the HTML pages.",
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