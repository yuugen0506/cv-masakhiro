import { useState } from "react";
import SkillsFramework from "./SkillsFramework";
import SkillsLanguage from "./SkillsLanguage";
import SkillsBackEnd from "./SkillsBackEnd";
import SkillsFrontEnd from "./SkillsFrontEnd";
import SkillsDatabase from "./SkillsDatabase";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";
import Image from "next/image";

Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I&apos;m <span>Masakhiro Gerelt</span>
              </h3>
              <p>
                I&apos;m a Full Stack Developer with over 6 years of experience. 
                I&apos;m from Mongolia. I was born on May 6, 1993, in Ulaanbaatar and am half Japanese. 
                I have had many friends since I was young and I am a communicative and loyal person who does not betray people's trust. 
                I am a quick learner and I like to follow a clean sequence in my work. 
                I have studied and lived in Ireland as well as Japan.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">What is my skill level?</h3>
              <p className="desc">
                &bull;	Framework
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <SkillsFramework />
                </div>
              </div>
              <p className="desc">
                &bull;	Programming language
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <SkillsLanguage />
                </div>
              </div>
              <p className="desc">
                &bull;	Front-End
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <SkillsFrontEnd />
                </div>
              </div>
              <p className="desc">
                &bull;	Back-End
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <SkillsBackEnd />
                </div>
              </div>
              <p className="desc">
                &bull;	Database
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <SkillsDatabase />
                </div>
              </div>
              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <Image
                width={445}
                height={599}
                src="./img/thumbs/26-35.jpg"
                alt="thumb"
              />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/about/3.jpg)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              {/* <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>6+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div> */}
            </div>
            <div className="image" style={{ marginTop: '100px' }}>
              <Image
                width={445}
                height={599}
                src="./img/thumbs/26-35.jpg"
                alt="thumb"
              />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/about/4.jpg)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>
            </div>
            <div className="image" style={{ marginTop: '100px' }}>
              <Image
                width={445}
                height={599}
                src="./img/thumbs/26-35.jpg"
                alt="thumb"
              />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/about/5.jpg)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>6+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <Image
              width={45}
              height={45}
              src="./img/svg/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
