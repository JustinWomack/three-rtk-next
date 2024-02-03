import { Container } from '@mui/material';
import { OrbitControls, Text3D, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ReactReduxContext } from 'react-redux';
import { Vector3 } from 'three';
import { SkyBox, ThreeCounter } from '.';

const Component = () => {
  const ContextBridge = useContextBridge(ReactReduxContext);

  return(
    <Container maxWidth="lg" style={{height: '100vh'}}>
      <Canvas
        gl={{antialias: true}}
        camera={{position: new Vector3(0, 0, 16)}}
      >
        <ContextBridge>
          <ambientLight intensity={2} />
          <directionalLight position={[-2, 1, -2]} intensity={2}/> 
          <directionalLight position={[-2, 1, 2]}/> 
          <OrbitControls enablePan={false}/>  
          <SkyBox
            texturePaths={[
              "/skybox-xpos.png",
              "/skybox-xneg.png",
              "/skybox-ypos.png",
              "/skybox-yneg.png",
              "/skybox-zpos.png",
              "/skybox-zneg.png"
            ]}
          />
          <ThreeCounter />          
        </ContextBridge>
      </Canvas>
    </Container>       
  )
}

export default Component
