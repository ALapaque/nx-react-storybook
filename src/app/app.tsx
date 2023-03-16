import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { Button } from '@my-standalone-react-app/ui'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="my-standalone-react-app" />

      <Button />
    </StyledApp>
  );
}

export default App;
