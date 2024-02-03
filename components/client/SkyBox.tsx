import { FunctionComponent } from 'react';
import { CubeTextureLoader } from 'three';
import { useThree } from '@react-three/fiber';

interface Props {
  texturePaths: string[];
}

const SkyBox: FunctionComponent<Props> = (props: Props) => {
  const { texturePaths } = props;
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load(texturePaths);

  scene.background = texture;

  return null;
}

export default SkyBox;
