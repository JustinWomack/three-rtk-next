import { Color } from '@react-three/fiber';
import { useRef, useState } from 'react';

type MeshProps = JSX.IntrinsicElements['mesh'];

interface CounterButtonProps extends MeshProps {
  color: Color;
}

const Component = ({ color, ...meshProps }: CounterButtonProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  return(
    <mesh
      ref={meshRef}
      {...meshProps}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[3, 3, 3]}/>
      <meshStandardMaterial color={hovered ? 'white' : color}/>
    </mesh>
  )
}

export default Component;
