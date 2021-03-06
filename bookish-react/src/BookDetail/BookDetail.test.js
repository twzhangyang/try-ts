import React from 'react';
import {render} from '@testing-library/react';
import BookDetail from "./BookDetail";

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description: 'Refactoring by Martin'
      }
    };

    const {container} = render(<BookDetail {...props} />);
    const title = container.querySelector('.book-title');
    expect(title.innerHTML).toEqual(props.book.name);
  });

  it('renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description: 'Refactoring by Martin'
      }
    };

    const {container} = render(<BookDetail {...props} />);
    const title = container.querySelector('.book-description');
    expect(title.innerHTML).toEqual(props.book.description);
  })
})
