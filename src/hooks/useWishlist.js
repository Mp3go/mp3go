import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlistItems } from '../redux/userWishlit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useWishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenData.token);

  async function addToWishlist(id){
    try {
      let res = await axios.post(
        'http://localhost:3001/user/wishlist',
        {
          albumId: id
        },
        {
          headers: {
            'x-access-token': token
          }
        }
      );
      console.log('In useWishlist', res.data);
      dispatch(addWishlistItems(res.data));
      toast.success('Item successfully added to wishlist');
      navigate('/wishlist');
    } catch (err) {
      if(err.response.status === 409){
        toast.warning(err.response.data.message);
      }
      else if (err.response.status === 401) {
        toast.error(err.response.data.message);
      }
      // console.log('error Found in useWishlist', err);
      
    }
  }

  return { addToWishlist };
};
