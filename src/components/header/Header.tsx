import { useState } from 'react';
import ModalWindow from '../modalWindow/ModalWindow';
import style from './header.module.scss';
import imagePng from '../../assets/images/image-avatar.png';
import CartWindow from '../cartWindow/CartWindow';
import CartIcon from '../icons/CartIcon';
import MenuIcon from '../icons/MenuIcon';
import NameIcon from '../icons/NameIcon';
import ModalSlider from '../modalSlider/ModalSlider';
interface CartItem {
  id: number;
  name: string;
  price?: number;
  quantity?: number;
}

function Header() {
  const [modalState, setModalState] = useState({
    isModalOpen: false,
    isCartModalOpen: false,
    isModalSliderOpen: false,
  });

  const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  const cart: CartItem[] = [];
  const toggleModal = (
    modalType: 'isModalOpen' | 'isCartModalOpen' | 'isModalSliderOpen',
  ) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalType]: !prevState[modalType],
    }));
  };

  return (
    <>
      <div className={style['header-main']}>
        <div className={style['header-navigation']}>
          <MenuIcon
            className={style['menu']}
            onClick={() => {
              if (!modalState.isCartModalOpen) toggleModal('isModalOpen');
            }}
          />
          <NameIcon
            className={style['nameIcon']}
            onClick={() => toggleModal('isModalSliderOpen')}
          />
          <ModalSlider
            isOpen={modalState.isModalSliderOpen}
            onClose={() => toggleModal('isModalSliderOpen')}
          />
          <div className={style['menu-items']}>
            {menuItems.map((item, index) => (
              <p key={index} className={style['items']}>
                {item}
              </p>
            ))}
          </div>

          <ModalWindow
            isOpen={modalState.isModalOpen}
            onClose={() => toggleModal('isModalOpen')}
          >
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </ModalWindow>
        </div>
        <div className={style['header-profile']}>
          <CartIcon
            fill={' hsl(219, 9%, 45%)'}
            onClick={() => toggleModal('isCartModalOpen')}
            className={style['cart']}
          />
          <CartWindow
            isOpen={modalState.isCartModalOpen}
            onClose={() => toggleModal('isCartModalOpen')}
            items={cart}
          />

          <img className={style['image']} src={imagePng} alt="My Image" />
        </div>
      </div>
      <hr className={style['line']} />
    </>
  );
}
export default Header;
