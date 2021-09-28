import ReactDOM from 'react-dom';
import {
  ChangeEvent,
  Dispatch, FormEvent, SetStateAction, useRef, useState,
} from 'react';
import { useOutside } from '../../../helpers/hooks';

import { ReactComponent as X } from '../../../assets/images/x.svg';
import { ReactComponent as Send } from '../../../assets/images/send.svg';

import { Container } from './style';

interface IContactModalProps {
  toggle: Dispatch<SetStateAction<boolean>>
}

interface IContactFormData {
  name: string;
  email: string;
  phone: string;
  post: string;
}

export default function ContactModal({ toggle }:IContactModalProps) {
  const modalRoot = document.getElementById('modal-root');
  const modalRef = useRef(null);

  const [hideModal, setHideModal] = useState(false);
  const [contactFormData, setContactFormData] = useState({} as IContactFormData);

  const toggleModal = () => {
    setHideModal((prevState) => !prevState);

    setTimeout(() => {
      toggle((prevState) => !prevState);
    }, 300);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setContactFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(contactFormData);
  };

  useOutside(modalRef, toggleModal);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <Container className={`${hideModal ? 'modal-contact-hide' : ''}`}>
      <article ref={modalRef} className="modal-contact__article">
        <button
          type="button"
          className="modal-contact__article-close-button"
          onClick={toggleModal}
        >
          <X className="modal-contact__article-close-icon" />
        </button>
        <form
          onSubmit={handleFormContactSubmit}
          className="modal-contact__article-form"
        >
          <h1 className="modal-contact__article-title">
            Contact
          </h1>
          <label className="modal-contact__article-label">
            Name
            <input
              className="modal-contact__article-input"
              type="text"
              name="name"
              value={contactFormData.name}
              onChange={handleInputChange}
              placeholder="Fill your full name"
            />
          </label>
          <label className="modal-contact__article-label">
            E-mail
            <input
              className="modal-contact__article-input"
              type="email"
              name="email"
              value={contactFormData.email}
              onChange={handleInputChange}
              placeholder="Fill a valid e-mail"
            />
          </label>
          <label className="modal-contact__article-label">
            Phone
            <input
              className="modal-contact__article-input"
              type="text"
              name="phone"
              value={contactFormData.phone}
              onChange={handleInputChange}
              placeholder="Fill your phone"
            />
          </label>
          <label className="modal-contact__article-label">
            Post
            <textarea
              className="modal-contact__article-textarea"
              name="post"
              value={contactFormData.post}
              onChange={handleInputChange}
              placeholder="Hello..."
            />
          </label>
          <button
            className="modal-contact__article-submit-button"
            type="submit"
          >
            <Send
              className="modal-contact__article-submit-icon"
            />
            Submit
          </button>
        </form>
      </article>
    </Container>,
    modalRoot,
  );
}
