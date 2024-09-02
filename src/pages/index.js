import * as React from 'react';
import { Button } from 'tectonica-ui';

const IndexPage = () => {
  return (
    <main>
      <h1>New Pluralists</h1>
      <Button
        block={{
          title: 'Click me!',
          link: 'https://tectonica.co',
        }}
      />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>New Pluralists</title>;
