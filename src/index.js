import React from 'react';
import ReactDOM from 'react-dom';
import { LayoutContainer, LayoutSection } from '../src/components/layout/index.js'

const Index = () => (
  <LayoutContainer>
      <LayoutSection secondary>2</LayoutSection>
      <LayoutSection main>1</LayoutSection>
  </LayoutContainer>
);

ReactDOM.render(<Index />, document.getElementById('root'));
