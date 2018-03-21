import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import BootstrapButton from '../src/components/bootstrap_button/bootstrap_button'
import { text, withKnobs } from '@storybook/addon-knobs/react'
import { withReadme, withDocs, doc } from 'storybook-readme';
import ButtonDocs from '../docs/bootstrap_button/DOCS.md';

const withDocsCustom = withDocs({
  PreviewComponent: ({ children }) => (
    <div
      style={{
        textAlign: 'center',
        padding: '25px',
        margin: '25px 0',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  ),
  FooterComponent: ({ children }) => (
    <div
      style={{
        padding: '25px',
        background: 'rgba(246, 255, 0, 0.23)',
        borderTop: '2px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  ),
});

const stories = storiesOf('BootstrapButton', module);

stories.addDecorator(withKnobs)
stories.addDecorator(withDocsCustom(ButtonDocs))
stories.add('simple text', () => <BootstrapButton title={text('Title', 'Danger Danger')} />)
