import ReactDOM from 'react-dom';
import {
  Dispatch, SetStateAction, useRef, useState,
} from 'react';
import { useOutside } from '../../../helpers/hooks';
import { Container } from './styles';

interface IErrorModalProps {
  toggle: Dispatch<SetStateAction<boolean>>
}

export default function ErrorModal({ toggle }:IErrorModalProps) {
  const modalRoot = document.getElementById('modal-root');
  const modalRef = useRef(null);

  const [hideModal, setHideModal] = useState(false);

  const toggleModal = () => {
    setHideModal((prevState) => !prevState);

    setTimeout(() => {
      toggle((prevState) => !prevState);
    }, 300);
  };

  useOutside(modalRef, toggleModal);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <Container className={`${hideModal ? 'modal-error-hide' : ''}`}>
      <article ref={modalRef} className="modal-error__article">
        <div className="modal-error__message">
          <h1 className="modal-error__yellow">
            Opss
          </h1>
          <br />
          <h1>
            something went
            <br />
            wrong
          </h1>
          <br />
          <h1 className="modal-error__yellow">
            try again later!
          </h1>
        </div>
      </article>
    </Container>,
    modalRoot,
  );
}
