import { Canvas } from "@react-three/fiber";
import "./style.css"
import { OrbitControls } from "@react-three/drei";
import MacContainer from "./macContainer";

const AboutMe = () => {
    return (
        <Canvas camera={{fov:20, position:[0,-10, 120]}}>
            <OrbitControls></OrbitControls>
            <MacContainer className='w-full h-full'></MacContainer>
        </Canvas>
    );
};

export default AboutMe;