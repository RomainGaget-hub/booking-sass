import type { Book, BaseComponentProps } from '@/types';
import { BookCard } from './BookCard';

interface BookListProps extends BaseComponentProps {
  books: Book[];
  onEditBook?: (book: Book) => void;
  onDeleteBook?: (bookId: string) => void;
  isLoading?: boolean;
}

export const BookList = ({
  books,
  className = '',
  onEditBook,
  onDeleteBook,
  isLoading = false,
}: BookListProps) => {
  if (isLoading) {
    return (
      <div
        className={`flex justify-center items-center py-8 ${className}`}
      >
        <div className="text-gray-500">Loading books...</div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-gray-500">
          <p className="text-lg mb-2">No books found</p>
          <p className="text-sm">Add your first book to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEditBook}
          onDelete={onDeleteBook}
        />
      ))}
    </div>
  );
};
