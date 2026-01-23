import { createPortal } from 'react-dom';

const MainPage = () => {
  return (
    <div onClick={(e) => console.log(e)}>
      {createPortal(<div>Children</div>, document.querySelector('body'))}
      <div>MainPage</div>
    </div>
  );
};

export default MainPage;
