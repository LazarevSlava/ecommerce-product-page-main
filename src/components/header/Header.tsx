import { useState } from 'react';
import ModalWindow from '../modalWindow/ModalWindow';
import style from './header.module.scss';
import imagePng from '../../assets/images/image-avatar.png';
import CartWindow from '../cartWindow/CartWindow';
import CartIcon from '../icons/CartIcon';
import MenuIcon from '../icons/MenuIcon';
import NameIcon from '../icons/NameIcon';
import ModalSlider from '../modalSlider/ModalSlider';
import { useAppSelector } from '../../hook';

interface HeaderCartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: () => void;
}

function Header() {
  const [modalState, setModalState] = useState({
    isModalOpen: false,
    isCartModalOpen: false,
    isModalSliderOpen: false,
  });
  const uniqueProductCount = useAppSelector(
    (state) => state.quantity.quantityProduct,
  );

  const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  const cart: HeaderCartItem[] = [];
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
          <div className={style['cartBlock']}>
            <CartIcon
              fill={'hsl(219, 9%, 45%)'}
              onClick={() => toggleModal('isCartModalOpen')}
              className={style['cart']}
            />
            {uniqueProductCount > 0 ? (
              <span className={style.numberOfProduct}>
                {uniqueProductCount}
              </span>
            ) : null}
          </div>
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
