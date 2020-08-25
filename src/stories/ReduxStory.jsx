import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp from '../07/ReduxApp01';

storiesOf('Redux', module).addWithJSX('스토어 생성', () => <ReduxApp></ReduxApp>);
