import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp from '../07/ReduxApp01';
import ReduxApp02 from '../07/ReduxApp02';
import ReduxApp03 from '../07/ReduxApp03';
import AdvReduxApp01 from '../07/AdvReduxApp01';
import AdvReduxApp02 from '../07/AdvReduxApp02';
import AdvReduxApp03 from '../07/AdvReduxApp03';
import AdvReduxApp04 from '../07/AdvReduxApp04';
import AdvReduxApp05 from '../07/AdvReduxApp05';

storiesOf('Redux', module)
  .addWithJSX('스토어 생성', () => <ReduxApp></ReduxApp>)
  .addWithJSX('dispatch알아보기', () => <ReduxApp02></ReduxApp02>)
  .addWithJSX('reducer03', () => <ReduxApp03></ReduxApp03>)
  .addWithJSX('AdvReduxApp01', () => <AdvReduxApp01></AdvReduxApp01>)
  .addWithJSX('AdvReduxApp02', () => <AdvReduxApp02></AdvReduxApp02>)
  .addWithJSX('그래프 DB', () => <AdvReduxApp03></AdvReduxApp03>)
  .addWithJSX('스토어에 저장된 데이터 읽어들이기(그래프 DB 읽어 들이기)', () => (
    <AdvReduxApp04></AdvReduxApp04>
  ))
  .addWithJSX('스토어에 저장된 데이터 수정하기', () => <AdvReduxApp05></AdvReduxApp05>);
