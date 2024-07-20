"use client";
import { useTheme } from "nextra-theme-docs";
import { ReactElement, useState } from "react";

import { RiMoonFill, RiSunFill } from "react-icons/ri";

import style from "../stylesheets/utils.module.scss";

export function ThemeSwitch(): ReactElement {
  const [state, setState] = useState("dark");
  const theme = useTheme();

  const props = { size: "25" };

  function themeSwitch(): void {
    setState(state === "dark" ? "light" : "dark");
    theme.setTheme(state);
  }

  const DarkStateUI: ReactElement = (
    <>
      <RiSunFill {...props} />
      <p>Light</p>
    </>
  );

  const LightStateUI: ReactElement = (
    <>
      <RiMoonFill {...props} />
      <p>Dark</p>
    </>
  );

  return (
    <button className={style.darkModeBtn} onClick={themeSwitch}>
      {state === "light" ? DarkStateUI : LightStateUI}
    </button>
  );
}

export function LicenseFooter(): ReactElement {
  return (
    <>
      <p>
        <a
          href="https://github.com/cresteem"
          target="_blank"
          style={{ fontWeight: "bold" }}
        >
          OPENSOURCE PROJECTS
        </a>{" "}
        powered by{" "}
        <a
          style={{ fontWeight: "bold" }}
          href="https://www.cresteem.com"
          target="_blank"
          rel="cc:attributionURL dct:creator"
          property="cc:attributionName"
        >
          CRESTEEM.
        </a>
      </p>
      <p style={{ position: "absolute", right: "2vw" }}>
        Made By{" "}
        <b>
          <a href="https://darsan.in">DARSAN</a>
        </b>
      </p>
    </>
  );
}

export function CresteemLogo() {
  return (
    <div className={style.logoDiv}>
      <p className={style.heroText}>
        <b>OPENSOURCE</b>
      </p>

      {/*?xml version="1.0" encoding="UTF-8"?*/}
      <div className={style.logoSubdiv}>
        <p className={style.subText}>By</p>
        <svg
          className={style.logoSvg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 412"
        >
          <path
            d="M610.26,289.59c-17.11,0-29.75-4.09-37.94-12.27-8.18-8.18-12.27-20.83-12.27-37.94v-51.55c0-17.26,4.07-29.98,12.22-38.16,8.14-8.18,20.73-12.2,37.77-12.05h27.12c14.05,0,24.77,2.9,32.16,8.69,7.4,5.79,11.69,14.92,12.89,27.4.45,3.14-.15,5.53-1.79,7.17-1.64,1.64-4.03,2.47-7.17,2.47-5.68,0-8.97-3.14-9.86-9.41-.75-6.87-3.12-11.5-7.12-13.9-4-2.39-10.37-3.59-19.11-3.59h-27.12c-7.92-.07-14.14.82-18.66,2.69-11.13,4.85-12.2,15.85-12.5,28.69v51.55c0,8,.95,14.27,2.86,18.83,1.91,4.56,5.14,7.79,9.69,9.69,4.56,1.91,10.83,2.86,18.83,2.86h26.9c8.74,0,15.11-1.21,19.11-3.64,4-2.43,6.37-7.04,7.12-13.84.9-6.28,4.18-9.41,9.86-9.41,3.14,0,5.53.82,7.17,2.47,1.64,1.64,2.24,4.03,1.79,7.17-1.2,12.55-5.49,21.71-12.89,27.46-7.4,5.75-18.12,8.63-32.16,8.63h-26.9Z"
            style={{ fill: "currentcolor", strokeWidth: 0 }}
          />
          <path
            d="M813.56,290.04c-2.47,1.57-4.82,2.05-7.06,1.46-2.24-.6-4.15-2.13-5.72-4.59l-34.74-57.83h-31.38v51.1c0,6.28-3.14,9.41-9.41,9.41s-9.41-3.14-9.41-9.41v-133.14c0-6.28,3.14-9.41,9.41-9.41h52.45c13.67,0,24.15,3.64,31.44,10.93,7.28,7.29,10.93,17.76,10.93,31.44v6.72c0,11.88-2.76,21.35-8.29,28.41-5.53,7.06-13.52,11.45-23.98,13.17l29.36,48.97c2.84,5.23,1.64,9.49-3.59,12.78ZM734.66,210.24h43.03c8.52,0,14.57-1.79,18.16-5.38,3.59-3.59,5.38-9.64,5.38-18.16v-6.72c0-8.44-1.79-14.47-5.38-18.1-3.59-3.62-9.64-5.44-18.16-5.44h-43.03v53.79Z"
            style={{ fill: "currentcolor", strokeWidth: 0 }}
          />
          <path
            d="M859.73,289.59c-6.28,0-9.41-3.14-9.41-9.41v-133.14c0-6.28,3.14-9.41,9.41-9.41h80.47c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-71.05v47.07h44.6c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-44.6v48.41h71.05c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-80.47Z"
            style={{ fill: "currentcolor", strokeWidth: 0 }}
          />
          <path
            d="M1017.86,289.59c-12.78,0-22.73-2.58-29.87-7.73-7.14-5.16-11.6-13.11-13.39-23.87-.3-3.29.37-5.75,2.02-7.4,2.74-3.19,11.35-3.31,14.06-.22,1.46,1.5,2.45,3.81,2.97,6.95,2.77,12.21,11.53,13.11,24.21,13.45h32.28c9.64,0,16.2-1.74,19.67-5.21,7.07-5.95,6.95-33.39-.17-39.22-3.59-3.55-10.09-5.32-19.5-5.32h-27.79c-14.12,0-24.6-3.46-31.44-10.37-13.59-11.99-13.72-50.81-.11-62.82,6.76-6.8,17.2-10.2,31.32-10.2h26.67c11.88,0,21.2,2.43,27.96,7.29,6.76,4.86,11.04,12.29,12.83,22.3.45,3.21-.15,5.66-1.79,7.34-2.71,3.17-11.29,3.5-14.12.17-1.5-1.57-2.46-3.85-2.91-6.84-1.2-4.41-3.47-7.41-6.84-9.02-3.36-1.61-8.41-2.41-15.13-2.41h-26.67c-8.96,0-14.98,1.59-18.04,4.76-6.22,5.36-6.11,30.7.11,36.03,3.14,3.29,9.19,4.93,18.16,4.93h27.79c14.72,0,25.68,3.59,32.89,10.76,14.36,12.52,14.5,53.55.06,66.06-7.17,7.06-18.16,10.59-32.95,10.59h-32.28Z"
            style={{ fill: "currentcolor", strokeWidth: 0 }}
          />
          <path
            d="M1163.78,289.59c-3.14,0-5.49-.78-7.06-2.35-1.57-1.57-2.35-3.92-2.35-7.06v-123.5h-43.48c-3.14,0-5.49-.78-7.06-2.35-3.14-2.77-3.14-11.35,0-14.12,1.57-1.57,3.92-2.35,7.06-2.35h105.79c3.14,0,5.49.78,7.06,2.35,3.14,2.77,3.14,11.35,0,14.12-1.57,1.57-3.92,2.35-7.06,2.35h-43.48v123.5c.02,5.99-3.36,9.45-9.41,9.41Z"
            style={{ fill: "currentcolor", strokeWidth: 0 }}
          />
          <path
            d="M1259.71,289.59c-6.28,0-9.41-3.14-9.41-9.41v-133.14c0-6.28,3.14-9.41,9.41-9.41h80.47c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-71.05v47.07h44.6c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-44.6v48.41h71.05c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-80.47Z"
            style={{ fill: "currentcolor", strokeWidth: 0 }}
          />
          <path
            d="M1389.26,289.59c-6.28,0-9.41-3.14-9.41-9.41v-133.14c0-6.28,3.14-9.41,9.41-9.41h80.47c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-71.05v47.07h44.6c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-44.6v48.41h71.05c6.28,0,9.41,3.14,9.41,9.41s-3.14,9.41-9.41,9.41h-80.47Z"
            style={{ fill: "currentcolor", strokeWidth: 0 }}
          />
          <path
            d="M1518.81,289.59c-6.28,0-9.41-3.14-9.41-9.41v-133.14c0-6.28,3.14-9.41,9.41-9.41,4.11,0,7.54,2.02,10.31,6.05l52.9,79.57-4.03.67,53.34-80.24c2.54-4.03,6.35-6.05,11.43-6.05s7.62,3.14,7.62,9.41v133.14c0,6.28-3.14,9.41-9.41,9.41s-9.41-3.14-9.41-9.41v-114.31l5.83,2.02-47.07,69.26c-2.76,4.03-6.58,6.05-11.43,6.05-3.36,0-6.43-2.02-9.19-6.05l-47.07-69.26,5.6,1.57v110.72c0,6.28-3.14,9.41-9.41,9.41Z"
            style={{ fill: "currentcolor", strokeWidth: 0 }}
          />
          <g id="b">
            <g id="c">
              <circle
                id="d"
                cx="352.01"
                cy="207.69"
                r="103.45"
                style={{
                  fill: "none",
                  opacity: ".6",
                  stroke: "currentcolor",
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <g id="e">
                <g id="f">
                  <path
                    d="M295.03,125.88c-12.2,7.96-24.02,20.39-31.58,33.18-14.07,23.8-17.48,53.73-9.07,80.37,6.8,21.61,20.52,39.94,39.63,52.92,21.12,14.35,47.97,19.96,73.47,15.34,25.58-4.65,48.18-19.06,63.62-40.59,2.43-3.39,6.1-9.45,5.87-9.68-.08-.08-1.9.42-4.03,1.08-10.65,3.38-18.84,4.69-30.99,4.94-9.69.21-15.54-.35-24.22-2.23-36.54-7.97-66.17-34.47-78.4-70.12-3.81-11.07-5.29-19.73-5.47-32.18-.18-12.34.88-20.85,3.93-31.3.62-2.15,1.06-3.95.98-3.99-.08-.08-1.74.96-3.74,2.25Z"
                    style={{ fill: "currentcolor", strokeWidth: 0 }}
                  />
                </g>
                <path
                  id="g"
                  d="M300.45,118.35c-.53.2-1.39.56-2.38,1.15-.99.59-1.46,1.01-2.73,1.89-1.06.73-1.63,1.05-2.37,1.52-1.68,1.06-2.88,2.03-5.28,3.97-1.12.9-2.94,2.38-5.09,4.33-.99.9-5.14,4.71-10.14,10.69-1.61,1.93-3.81,4.57-6.31,8.23-1.71,2.5-6.38,9.6-10.35,19.92-.65,1.68-2.44,6.48-4.02,12.98-2.47,10.18-2.86,18.18-2.96,20.71-.1,2.63-.26,9.72,1.07,18.8,1.21,8.3,3.16,14.75,4.38,18.37,1.57,4.68,3.19,8.36,4.24,10.62,2.52,5.4,4.9,9.29,5.72,10.6.66,1.06,3.06,4.84,6.62,9.29,2.36,2.95,4.5,5.27,5.84,6.72.91.99,1.57,1.68,2.07,2.18.55.56,1.61,1.62,3.19,3.08,1.41,1.31,3.62,3.34,6.74,5.79,2.74,2.15,4.99,3.67,5.98,4.32,3.31,2.2,5.92,3.62,9.13,5.37,1.62.88,2.79,1.52,4.47,2.32,2.29,1.09,4.19,1.85,5.76,2.48,1.65.66,2.47.99,3.71,1.41,1.02.35,1.24.39,4.45,1.4,1.54.49,1.58.5,2.23.7,1.31.39,2.45.74,3.71,1.04,1.47.35,1.74.32,4.63.84,2.22.4,2.21.45,3.52.68,2,.35,3.7.5,7.02.8,3.03.27,4.55.4,6.1.45,2.22.06,3.86-.01,5.9-.1,3.16-.14,5.65-.37,6.82-.49,4.64-.46,10.47-1.05,17.65-3.07,4.39-1.24,7.91-2.63,10.08-3.5,3.27-1.3,5.67-2.43,6.22-2.69,1.95-.92,7.23-3.49,13.7-7.8,1.88-1.26,4.28-2.87,7.29-5.29,4.17-3.37,7-6.3,9.62-9.02,3.16-3.28,5-5.2,7.23-8.24,1.7-2.3,1.46-2.32,5.03-7.47,3.06-4.41.08-.14,2.87-4.48,1.66-2.58,1.98-3.06,1.79-3.35-.59-.9-5.53.56-9.72,3.31-6.75,4.42-5.46,8.17-12.31,13.5-4.76,3.7-9.73,5.26-11.89,5.93-4.22,1.29-7.56,1.53-8.64,1.63-16.06,1.38-32,12.23-50.53,11.58-15.02-.53-26.15-8.43-35.5-15.06-6.62-4.7-17.43-12.37-24.07-26.14-3.3-6.85-2.82-9.49-7.02-21.64-3.85-11.13-8.02-19.82-10.96-25.45"
                  style={{ fill: "currentcolor", strokeWidth: 0 }}
                />
              </g>
            </g>
            <g id="h">
              <path
                d="M475.26,67.26c-14,1.75-28.8,6.69-45.16,15.09-20.82,10.69-35.95,23.06-47.83,39.17l-2.29,3.07-4.47-.02c-15.15-.03-25.84,5.16-34.13,16.57-4.64,6.44-8.46,15.89-10.19,25.34-.69,3.69-.68,4.13-.19,5.02,1.3,2.18.91,2.18,18.47-.03,8.78-1.11,16.05-2.04,16.16-2.01.14,0,.36,1.58.54,3.49.55,5.91.32,5.55,8.34,13.37,8.27,8.03,8.53,8.2,14.27,8.49l3.76.18-.18,1.7c-1.32,13.66-2.62,30.42-2.42,31.21.16.57.78,1.28,1.48,1.67,1.42.84,2.43.75,9.11-1.08,15.86-4.35,27.24-12.79,32.68-24.19,2.81-5.93,3.66-10.21,3.64-18.9v-6.31s2.76-2.18,2.76-2.18c7.18-5.62,14.71-13.31,20.52-20.89,15.06-19.66,26.73-46.62,29.69-68.61.85-6.47.46-17.43-.73-18.96-.26-.36-1.1-.74-1.89-.94-1.63-.33-9.71-.5-11.91-.24ZM440.22,105.79c3.23.77,5.27,1.85,7.73,4.07,7.42,6.67,7.77,17.45.84,24.69-9.26,9.63-25.36,5.51-29-7.45-3.45-12.23,8.08-24.29,20.44-21.32Z"
                style={{ fill: "currentcolor", strokeWidth: 0 }}
              />
              <path
                d="M356.95,179.26c-4.16,1.02-8.05,3.22-10.85,6.13-4.63,4.82-7.66,17.82-8.56,36.53l-.14,3.75,3.53-.32c16.82-1.48,28.63-4.31,34.36-8.28,3.35-2.3,6.36-7.05,7.45-11.8.93-4.02-.25-5.33-2.92-3.37-4.3,3.19-11.75,4.12-16.09,2.04-4.41-2.08-7.01-6.14-7.14-11.04-.06-2.92,1.46-8.47,2.97-10.74.98-1.5,1.01-1.9.24-2.64-.55-.57-1.42-.62-2.86-.27Z"
                style={{ fill: "currentcolor", strokeWidth: 0 }}
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export const ProjectCard = ({ name, tech, icon }: any) => {
  return (
    <div
      className={style.projectCard}
      onMouseEnter={() => {
        infoboardView(
          name === "Richie"
            ? "richie-js"
            : name === "Hawk"
            ? "hawk-js"
            : "minomax"
        );
      }}
    >
      {icon}
      <p>
        <b>{name}</b> {tech}
      </p>
    </div>
  );
};

type projectName = "richie-js" | "hawk-js" | "minomax";
export function infoboardView(type: projectName) {
  const infoboard = document.querySelector(`.${style.infoboard}`);
  infoboard?.classList.toggle(`${style.showinfo}`);
  const textnode = infoboard?.querySelector("p");
  if (type === "richie-js") {
    if (textnode) {
      textnode.innerHTML =
        "Richie JS is an SEO tool that generates rich results, which are structured data snippets designed to enhance search engine visibility and improve user experience. Richie JS supports to generate various types of rich results recognized by Google. It leverages modern web technologies like Node.js and JavaScript, and is built on top of popular libraries such as Axios, Cheerio, Puppeteer, and Yargs ( Thanks to those creators, maintainers and contributors of these packages ).";
    }
  } else if (type === "hawk-js") {
    if (textnode) {
      textnode.innerHTML =
        "Hawk JS is an advanced sitemap generator and deployer designed to enhance your website's search engine optimization (SEO). It automates the creation of comprehensive sitemaps and simplifies the submission process to major search engines, including Google, Bing, Yahoo, Yandex, Yep, and IndexNow supported search engines. Hawk JS is built to serve web developers, SEO enthusiasts, and digital marketers, providing an easy-to-use tool that boosts your site's visibility and search engine ranking.";
    }
  } else {
    if (textnode) {
      textnode.innerHTML =
        "Minomax: a powerful Node.js package designed to efficiently compress a wide range of web resources, including videos, images, HTML, CSS, JavaScript, and SVG files. Enhance your website's performance and reduce load times with Minomax's robust compression capabilities.";
    }
  }
}

export function hideView() {
  const infoboard = document.querySelector(`.${style.infoboard}`);
  infoboard?.classList.toggle(`${style.showinfo}`);
}
