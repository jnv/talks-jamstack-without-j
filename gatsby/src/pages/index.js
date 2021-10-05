import * as React from 'react';
import Counter from '../components/counter';

const IndexPage = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Counter count={0} />
    </div>
  );
};

export default IndexPage;
