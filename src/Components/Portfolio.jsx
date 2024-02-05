/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/OIP.jpg";

const imageAltText = "Man using his laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "G.D.E",
    description:
      "The Student Guide (GDE) is an application designed for a successful and enlightened university experience. It aims to facilitate students’ academic paths by providing them with crucial information to guide their choices and make clear decisions.",
    url: "https://github.com/18BG/gde.git",
  },
  {
    title: "Victoire - shop app",
    description:
      "An ecommerce app for Victoire brand",
    url: "https://github.com/18BG/e-shope.git",
  },
  {
    title: "Expense APP",
    description:
      "Simple app that let you to manage easy ypur expense",
    url: "https://github.com/AymaneD2000/ExpenseAPP.git",
  },
  {
    title: "Zetron AI",
    description:
      "A clone of chatGPT application with some custom features",
    url: "https://github.com/AymaneD2000/ZetronAI.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
