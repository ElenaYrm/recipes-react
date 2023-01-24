import { Message } from '../../components/shared/Message';

function NotFound() {
  return (
    <>
      <Message message={'The page is not found'} typeMessage={'error'} />
    </>
  );
}

export default NotFound;
