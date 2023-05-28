import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particlesConfig";
import "../assets/components.css";

import React from "react";

const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div id="particles" className="-z-50">
      <Particles
        className="-z-50"
        id="tsparticles"
        particlesLoaded="particlesLoaded"
        init={particlesInit}
        loaded={particlesLoaded}
        width="100vw"
        height="100vh"
        options={particlesConfig}></Particles>
    </div>
  );
};

export default ParticlesBG;
