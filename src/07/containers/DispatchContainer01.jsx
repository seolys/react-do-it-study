import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions';

// 1.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setAge: (id, age) => dispatch(setAge(id, age)),
//   };
// };

// 2. 대입만 하는 형태일때 아래와같이 사용가능.
// const mapDispatchToProps = {
//   setAge: setAge,
// };

// 3. Key와 Value가 똑같기 때문에 한번 더 생략.
const mapDispatchToProps = {
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
