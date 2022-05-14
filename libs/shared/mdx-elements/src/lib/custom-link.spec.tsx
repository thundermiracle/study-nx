import { render } from '@testing-library/react';

import CustomLink from './custom-link';

describe('CustomLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CustomLink as="https://google.com" href="https://google.com">
        Hello Google
      </CustomLink>
    );
    expect(baseElement).toBeTruthy();
  });
});
