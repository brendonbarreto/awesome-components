import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import BootstrapButton from '../src/components/bootstrap_button'
import { text, withKnobs } from '@storybook/addon-knobs/react'

const stories = storiesOf('BootstrapButton', module);


stories.addDecorator(withKnobs)
stories.add('simple text', () => <BootstrapButton title={text('Title', 'Danger Danger')} />)
