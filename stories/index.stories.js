// import React from 'react';
//
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
//
// import { Button, Welcome } from '@storybook/react/demo';
//
// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import {Button} from '../src/index'


storiesOf('Button', module)
  .add('simple text', () => <Button title='Hello Button' onClick={action('clicked Hello Button')} />)
  .add('with some emoji', () => <Button title='😀 😎 👍 💯' onClick={action('clicked Emojis')} />)
  .add('urgent text prefix', () => <Button title='!Cancel' onClick={action('clicked !Cancel')} />)
  .add('urgent text sufix', () => <Button title='Cancel!' onClick={action('clicked Cancel!')} />)
