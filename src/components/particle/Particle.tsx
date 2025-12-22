import {useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import polygon from '../../assets/image/Polygon.svg'
import cirle from '../../assets/image/cirlePattern.svg'
import crest from '../../assets/image/crestPattern.svg'
import {loadSlim} from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "particles": {
                    "number": {
                        "value": 14,
                        "density": {
                            "enable": true,
                            "value_area": 1657.2100474277727
                        }
                    },

                    "shape": {
                        "type": ["image", "image2"],
                        "stroke": {
                            "width": 10,
                            "color": "green"
                        },
                        "polygon": {
                            "nb_sides": 3
                        },
                        "image": [{
                            "src": polygon,
                            "width": 24,
                            "height": 24,
                        },
                            {
                                "src": cirle,
                                "width": 24,
                                "height": 24
                        },
                            {
                                "src": crest,
                                "width": 24,
                                "height": 24
                            },
                        ]
                    },
                    "opacity": {
                        "value": 0.8,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1.3,
                            "opacity_min": 0.5,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 20,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 20,
                            "size_min": 20,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                    },
                    "move": {
                        "enable": true,
                        "speed": 10,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "retina_detect": true
            }}
        />
    );
};