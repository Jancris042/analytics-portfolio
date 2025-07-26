import excelLogo from "../assets/img/excel.svg";
import pythonLogo from "../assets/img/python.svg";
import mysqlLogo from "../assets/img/mysql.svg";
import powerbiLogo from "../assets/img/powerbi.svg";
import tableauLogo from "../assets/img/tableau.svg";

import javascriptLogo from "../assets/img/javascript.svg";
import phpLogo from "../assets/img/php.svg";
import htmlLogo from "../assets/img/html.svg";
import cssLogo from "../assets/img/css.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Below are my top tools and languages in Data Analytics and Web Development.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={excelLogo} alt="Excel Logo" />
                  <h5>Excel</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="Python Logo" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={mysqlLogo} alt="MySQL Logo" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={powerbiLogo} alt="Power BI Logo" />
                  <h5>Power BI</h5>
                </div>
                <div className="item">
                  <img src={tableauLogo} alt="Tableau Logo" />
                  <h5>Tableau</h5>
                </div>
                <div className="item">
                  <img src={javascriptLogo} alt="JavaScript Logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={phpLogo} alt="PHP Logo" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={htmlLogo} alt="HTML Logo" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssLogo} alt="CSS Logo" />
                  <h5>CSS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
