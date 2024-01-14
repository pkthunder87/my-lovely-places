import { MdFastfood } from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';
import { FaShopify } from 'react-icons/fa';

function LocationIcon({ entryIcon }) {
  return (
    <div className="text-[2rem] ">
      {entryIcon === 'restaurant' ? (
        <IoRestaurant />
      ) : entryIcon === 'store' ? (
        <FaShopify />
      ) : (
        <MdFastfood />
      )}
    </div>
  );
}

export default LocationIcon;
