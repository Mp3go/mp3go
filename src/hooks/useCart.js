import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartItems } from '../redux/usercart';
import { toast } from 'react-toastify';

export const useCart = () => {
  const token = useSelector((state) => state.tokenData.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function addtoCart(id) {
    try {
      let res = await axios.post(
        'http://localhost:3001/user/cart',
        {
          albumId: id
        },
        {
          headers: {
            'x-access-token': token
          }
        }
      );
      dispatch(addCartItems(res.data));
      navigate('/cart');
    } catch (err) {
      if (err.response.status === 401) {
        toast.warning(err.response.data.message);
      } else if (err.response.status === 409) {
        toast.error(err.response.data.message);
      }
      console.log('error Found in useCart');
    }
  }

  return { addtoCart };
};
