import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fetchRestaurantList } from '../services/api';
import { useSelector } from 'react-redux';
import { CardMedia } from '@mui/material';

const Favorites = ({ isOpen, onClose }) => {
  const [restaurants, setRestaurants] = useState([]);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetchRestaurantList();
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Fetch data only if the dialog is open
    if (isOpen) {
      fetchRestaurants();
    }
  }, [isOpen]);

  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favorites.includes(restaurant.id)
  );

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={onClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Favorites</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <table cellPadding={10}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {favoriteRestaurants.map((restaurant) => (
                  <tr key={restaurant.id}>
                    <td>{restaurant.name}</td>
                    <td>
                      <CardMedia
                        component="img"
                        height="44"
                        image="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                        alt="Paella dish"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Favorites;
