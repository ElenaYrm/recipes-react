import { ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Message } from '../Message';

interface CustomErrorBoundaryProps {
  children: ReactElement;
}

function CustomErrorBoundary({ children }: CustomErrorBoundaryProps) {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => <Message message={error.message} typeMessage={'error'} />}
    >
      {children}
    </ErrorBoundary>
  );
}

export default CustomErrorBoundary;
