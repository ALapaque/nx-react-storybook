import { render } from '@testing-library/react';

import EoCore from './eo-core';

describe('EoCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EoCore />);
    expect(baseElement).toBeTruthy();
  });
});
