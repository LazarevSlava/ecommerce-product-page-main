import AboutItem from '../aboutItem/AboutItem';
import Slider from '../slider/Slider';
import style from './viewOfItem.module.scss';

function ViewOfItem() {
  return (
    <div className={style['main']}>
      <Slider />
      <AboutItem />
    </div>
  );
}
export default ViewOfItem;
