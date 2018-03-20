import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info';
import BootstrapCard from '../src/components/bootstrap_card'



storiesOf('BootstrapCard', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add('example card', withInfo({
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      },
      text: 'String or React Element with docs about my component', // Warning! This option's name will be likely renamed to "summary" in 3.3 release. Follow this PR #1501 for details
      // other possible options see in Global options section below
    })(() => <BootstrapCard />))
