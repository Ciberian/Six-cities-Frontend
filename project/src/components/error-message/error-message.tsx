import { NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import './error-message.css';


function ErrorMessage(): JSX.Element | null {
  const { error } = useAppSelector((state) => state[NameSpace.Error]);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
