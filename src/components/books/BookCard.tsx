import type { Book, BaseComponentProps } from '@/types';

interface BookCardProps extends BaseComponentProps {
  book: Book;
  onEdit?: (book: Book) => void;
  onDelete?: (bookId: string) => void;
}

export const BookCard = ({
  book,
  className = '',
  onEdit,
  onDelete,
}: BookCardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 border ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {book.title}
          </h3>
          <p className="text-gray-600">by {book.author}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            book.status === 'read'
              ? 'bg-green-100 text-green-800'
              : book.status === 'currently_reading'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {book.status.replace('_', ' ')}
        </span>
      </div>

      {book.description && (
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {book.description}
        </p>
      )}

      <div className="flex justify-between items-center text-sm text-gray-500">
        <div>
          {book.genre && <span className="mr-4">Genre: {book.genre}</span>}
          {book.publishedYear && (
            <span>Published: {book.publishedYear}</span>
          )}
        </div>

        <div className="flex space-x-2">
          {onEdit && (
            <button
              onClick={() => onEdit(book)}
              className="text-blue-600 hover:text-blue-800"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(book.id)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
