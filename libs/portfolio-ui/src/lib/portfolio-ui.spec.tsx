import { render } from '@testing-library/react';

import PortfolioUi from './portfolio-ui';

describe('PortfolioUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PortfolioUi />);
    expect(baseElement).toBeTruthy();
  });
});
