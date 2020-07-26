import React from 'react';
import {render} from '@testing-library/react';
import BookList from "./BookList";
import {MemoryRouter as Router} from 'react-router-dom';

describe('BookList', () => {
  const renderWithRouter = (component) => {
    return {
      ...render(<Router>
        {component}
      </Router>)
    }
  }

  it('loading', () => {
    const props = {
      loading: true
    };

    const { container } = render(<BookList {...props} />);
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Loading');
  })

  it('error', () => {
    const props = {
      error: true
    };

    const { container } = render(<BookList {...props} />);
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Error');
  })

  it('render books', () => {
    const props = {
      books: [
        {"name": "Refactoring", "id": 1},
        {"name": "Domain-driven design", "id": 2}
      ]
    }

    const {container} = renderWithRouter(<BookList {...props} />);
    const titles = [...container.querySelectorAll('h2')].map(x => x.innerHTML);
    expect(titles).toEqual(['Refactoring', 'Domain-driven design']);
  });
})
