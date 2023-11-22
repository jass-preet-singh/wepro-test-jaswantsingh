import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { Add_Remove_Favorite } from '../redux/reducers/favorites';

const SingleRestaurant = ({ restaurant }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleToggleFavorite = (id) => {
    dispatch(Add_Remove_Favorite(id));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {restaurant?.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={restaurant?.name}
      // subheader={restaurant?.createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='d-flex justify-content-between'>
        <IconButton aria-label={favorites.includes(restaurant.id) ? 'Remove from Favorites' : 'Add to Favorites'}>
          <FavoriteIcon onClick={() => handleToggleFavorite(restaurant.id)} color={favorites.includes(restaurant.id) ? "error" : "disabled"} />
        </IconButton>
        <IconButton aria-label="share">
          <Rating
            name="read-only"
            value={restaurant.rating / 20}
            readOnly
            precision={0.5}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default SingleRestaurant