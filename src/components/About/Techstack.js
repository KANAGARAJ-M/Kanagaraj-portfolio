import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus, CgCap } from "react-icons/cg";
import {
  
  DiNodejs,
  DiAndroid,DiWebplatform,
  DiGit,
  DiJava
  
} from "react-icons/di";
import {
  
  SiFirebase,
  SiAngularjs,SiReact,SiJavascript,SiSimilarweb,SiWebpack
  
} from "react-icons/si";
import {TbBrandFlutter } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandFlutter />
      </Col>


      
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
      </Col>



      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>




      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
      </Col>



      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>




      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}



      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
