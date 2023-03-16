import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EoCoreProps {}

const StyledEoCore = styled.div`
  color: pink;
`;

export function EoCore(props: EoCoreProps) {
  return (
    <StyledEoCore>
      <h1>Welcome to EoCore!</h1>
    </StyledEoCore>
  );
}

export default EoCore;
