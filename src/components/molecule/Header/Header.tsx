import { useState } from 'react';

import { Link } from 'react-router-dom';
import { ContactModal } from '../ContactModal';

import { Container } from './styles';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => (!prevState));
  };

  return (
    <Container>
      <div className="header-wrapper">
        <Link
          to="/"
          className="header__logo"
        >
          Rockr Blog
        </Link>
        <nav className="header__nav">
          <Link
            to="/"
            className="header__nav-link"
          >
            Posts
          </Link>
          <button
            type="button"
            className="header__nav-link"
            onClick={toggleModal}
          >
            Contact
          </button>
          <Link
            to="/article/add"
            className="header__nav-link--new"
          >
            New Post
          </Link>
        </nav>
      </div>
      {showModal && (
        <ContactModal toggle={setShowModal} />
      )}
    </Container>
  );
}
