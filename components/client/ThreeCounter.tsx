import { connect } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { useAppDispatch } from '@/lib/redux/hooks';
import { modifyCount } from '@/lib/redux/reducers/counter';
import { Text3D, Center } from '@react-three/drei';
import { ThreeCounterButton } from '.';

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count
});

interface CounterProps {
  count: number;
}

const Component = ({ count }: CounterProps) => {
  const dispatch = useAppDispatch();

  const handleModify = (amount: number) => {
    dispatch(modifyCount(amount))
  }

  return(
    <Center>
      <Text3D
        font={'/fonts/Avenir-rev.json'}
        scale={10}
      >
          <meshStandardMaterial />
          {`${count}`}
      </Text3D>
      <ThreeCounterButton color={'#FF6859'} position={[-3, 0, 1]} onClick={() => handleModify(-1)}/>
      <ThreeCounterButton color={'#1EB980'} position={[11, 0, 1]} onClick={() => handleModify(1)}/>
    </Center>
  )
}

export default connect(mapStateToProps, {

})(Component);
