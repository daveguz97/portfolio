import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import projectListStyle from "../styles/ProjectList.module.scss";
import styles from "../styles/Layout.module.scss";

const ProjectList = ({ tags }) => {
  return (
    <div className={projectListStyle.projectList}>
      <div className={`${styles.card} ${projectListStyle.card} front-end`}>
        <div className={projectListStyle.cardImgDiv}>
          <img src="/images/projects/knowrona.png" alt="Knowrona" />
        </div>
        <p className={projectListStyle.tags}>
          #HTML #CSS #React #JavaScript #frontend
        </p>
        <p className={projectListStyle.description}>
          Here is a cool react pop quiz game I worked on with a team of
          developers and designers.
        </p>
        <div className={projectListStyle.btnGroup}>
          <a href="https://www.knowrona.net/home" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnDanger}`}>
              Demo
            </button>
          </a>
          <a href="https://github.com/HJassar/knowrona" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={`${styles.card} ${projectListStyle.card} back-end`}>
        <div className={projectListStyle.cardImgDiv}>
          <img src="/images/projects/pinterest.png" alt="Pinterest" />
        </div>
        <p className={projectListStyle.tags}>
          #HTML #CSS #bootstrap #django #python #JavaScript
        </p>
        <p className={projectListStyle.description}>
          This was my final capstone project we made with a team of 3 in only 2
          weeks! You can add a board, a pin, dark mode, comment, like, user
          authentication and a lot more!
        </p>
        <div className={projectListStyle.btnGroup}>
          <button className={`${styles.btn} ${projectListStyle.btnDanger}`}>
            Demo
          </button>
          <a href="https://github.com/sarahbeverton/capstone" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={`${styles.card} ${projectListStyle.card} responsive`}>
        <div className={projectListStyle.cardImgDiv}>
          <img src="/images/projects/edie-homepage.png" alt="Edie Homepage" />
        </div>
        <p className={projectListStyle.tags}>#HTML #CSS #SASS #responsive</p>
        <p className={projectListStyle.description}>
          This is a mockup page for a company from{" "}
          <a href="http://devchallenges.io" target="_blank">
            devchallenges.io
          </a>
        </p>
        <div className={projectListStyle.btnGroup}>
          <a href="https://edie-dg.netlify.app/" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnDanger}`}>
              Demo
            </button>
          </a>
          <a href="https://github.com/daveguz97/edie-homepage" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={`${styles.card} ${projectListStyle.card} responsive`}>
        <div className={projectListStyle.cardImgDiv}>
          <img src="/images/projects/404.png" alt="404 Not found" />
        </div>
        <p className={projectListStyle.tags}>#HTML #CSS #SASS #responsive</p>
        <p className={projectListStyle.description}>
          Here is a fancy 404 page I created with SASS and HTML from{" "}
          <a href="http://devchallenges.io" target="_blank">
            devchallenges.io
          </a>
        </p>
        <div className={projectListStyle.btnGroup}>
          <a href="https://scarecrow-404.netlify.app/" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnDanger}`}>
              Demo
            </button>
          </a>
          <a href="https://github.com/daveguz97/404-Not-Found" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={`${styles.card} ${projectListStyle.card} responsive`}>
        <div className={projectListStyle.cardImgDiv}>
          <img
            src="/images/projects/wall2wall.png"
            alt="Wall2Wall Productions"
          />
        </div>
        <p className={projectListStyle.tags}>
          #HTML #CSS #SASS #JavaScript #Gsap #responsive
        </p>
        <p className={projectListStyle.description}>
          Here is a webpage I made for a videographer using HTML, SASS,
          JavaScript, and Gsap
        </p>
        <div className={projectListStyle.btnGroup}>
          <a href="https://wall2wallproductions.netlify.app/" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnDanger}`}>
              Demo
            </button>
          </a>
          <a
            href="https://github.com/daveguz97/wall2wallproductions"
            target="_blank"
          >
            <button className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={`${styles.card} ${projectListStyle.card} responsive`}>
        <div className={projectListStyle.cardImgDiv}>
          <img src="/images/projects/checkout.png" alt="Checkout" />
        </div>
        <p className={projectListStyle.tags}>#HTML #CSS #SASS #Responsive</p>
        <p className={projectListStyle.description}>
          This is a mobile responsive checkout page I made with{" "}
          <a href="http://devchallenges.io" target="_blank">
            devchallenges.io
          </a>
        </p>
        <div className={projectListStyle.btnGroup}>
          <a href="https://checkout-dg.netlify.app/" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnDanger}`}>
              Demo
            </button>
          </a>
          <a href="https://github.com/daveguz97/Checkout-Page" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={`${styles.card} ${projectListStyle.card} responsive`}>
        <div className={projectListStyle.cardImgDiv}>
          <img
            src="/images/projects/interior-consultant.png"
            alt="Interior Consultant page"
          />
        </div>
        <p className={projectListStyle.tags}>#HTML #CSS #SASS #responsive</p>
        <p className={projectListStyle.description}>
          This is an interior consultant page I made from{" "}
          <a href="http://devchallenges.io" target="_blank">
            devchallenges.io
          </a>
          . It also includes dark mode and light mode.
        </p>
        <div className={projectListStyle.btnGroup}>
          <a href="https://my-interior-consultant.netlify.app/" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnDanger}`}>
              Demo
            </button>
          </a>
          <a
            href="https://github.com/daveguz97/interior-consultant"
            target="_blank"
          >
            <button className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <div className={`${styles.card} ${projectListStyle.card} responsive`}>
        <div className={projectListStyle.cardImgDiv}>
          <img src="/images/projects/recipe.png" alt="Recipe Page" />
        </div>
        <p className={projectListStyle.tags}>#HTML #CSS #SASS #responsive</p>
        <p className={projectListStyle.description}>
          Here is a recipe blog I created as a challenge from{" "}
          <a href="http://devchallenges.io" target="_blank">
            devchallenges.io
          </a>
        </p>
        <div className={projectListStyle.btnGroup}>
          <a href="https://cheesecake-recipe.netlify.app/" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnDanger}`}>
              Demo
            </button>
          </a>
          <a href="https://github.com/daveguz97/recipe-blog" target="_blank">
            <button className={`${styles.btn} ${projectListStyle.btnPrimary}`}>
              Code
            </button>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .responsive {
            display: ${!tags.includes("responsive") ? "none" : "flex"};
          }

          .front-end {
            display: ${!tags.includes("front-end") ? "none" : "flex"};
          }

          .back-end {
            display: ${!tags.includes("back-end") ? "none" : "flex"};
          }
        `}
      </style>
    </div>
  );
};

export default ProjectList;
