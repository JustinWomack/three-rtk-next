import { connect } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { Button } from '@mui/material';
import { useAppDispatch } from '@/lib/redux/hooks';
import { modifyCount } from '@/lib/redux/reducers/counter';

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
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      {
        `Counter is ${count}`
      }
      <div style={{display: 'flex'}}>
        <Button variant={'contained'} onClick={() => handleModify(-1)}>
          -
        </Button>
        <Button variant={'contained'} onClick={() => handleModify(1)}>
          +
        </Button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, {

})(Component);
