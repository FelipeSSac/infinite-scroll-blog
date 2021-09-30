import ReactDOM from 'react-dom';

export default function NotificationToast() {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div>zap</div>,
    modalRoot,
  );
}
