import { useState } from 'react';
import Modal from '../modalWindow/ModalWindow';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>XXX</button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Modal>
        </>
    );
}
export default Header;
