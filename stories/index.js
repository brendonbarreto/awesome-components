import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { withDocs } from 'storybook-readme'
import withDocsCustom from '../.storybook/custom_docs'

import Button from '../components/button'
import ButtonDocs from '../components/button/DOCS.md'
import ButtonDocs2 from '../components/button/DOCS_2.md'

let count = 1
const printClicks = () => {
  return count++
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  //.addDecorator(withDocsCustom(ButtonDocs))
  .add('Button', withDocsCustom(ButtonDocs, () => (
    <Button
      onClick={action('click')}
      alert={boolean('alert', false)}
      success={boolean('success', false)}
      label={text('label', 'Hello Im Button')}
    />)))

  .add('Button 2', withDocsCustom(ButtonDocs2, () => (
    <Button
      onClick={action('click')}
      alert={boolean('alert', false)}
      success={boolean('success', false)}
      label={text('label', 'Hello Im Button')}
    />)
  ));
