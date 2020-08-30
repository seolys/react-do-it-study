import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ContainerComponent from './containers/ContainerComponent';
import PresentationComponent from './PresentationComponent';
import DispatchContainer from './containers/DispatchContainer3';
import SearchFilterInputContainer from './containers/SearchFilterInputContainer';
import SearchResetButtonContainer from './containers/SearchResetButtonContainer';
import SearchResultTableContainer from './containers/SearchResultTableContainer';
import { setCollection } from './actions/collectionActions01';

class SearchFilterReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Park', age: 35 },
      ]),
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        리덕스 예제
        <fieldset>
          <SearchFilterInputContainer type="number" name="id" label="아이디 검색" />
          <SearchFilterInputContainer name="name" label="이름 검색" />
          <SearchFilterInputContainer type="number" name="age" label="나이 검색" />
          <SearchResetButtonContainer>리셋</SearchResetButtonContainer>
        </fieldset>
        <SearchResultTableContainer />
        화면 컴포넌트: <PresentationComponent userName="사용자 이름" />
        <br />
        데이터용 컴포넌트: <ContainerComponent id={232} />
        <br />
        <DispatchContainer />
      </Provider>
    );
  }
}
export default SearchFilterReduxApp;
