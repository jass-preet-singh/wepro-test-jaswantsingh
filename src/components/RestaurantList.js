import React, { useEffect, useState } from 'react';
import { fetchRestaurantList } from '../services/api';
import SingleRestaurant from './SingleRestaurant';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetchRestaurantList();
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurant list:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <div className='container-box'>

      {loading ? (
        <tr>
          <td colSpan="5" className="text-center">
            <strong>Loading...</strong>
          </td>
        </tr>
      ) : restaurants?.length > 0 ? (
        <div className='row'>
          {restaurants?.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((restaurant, index) => (
            <div className='col-md-4 mb-4' key={index}>
              <SingleRestaurant restaurant={restaurant} />
            </div>
          ))}
        </div>
      ) : (
        <tr>
          <td colSpan="5" className="text-center">
            <strong>Records not found</strong>
          </td>
        </tr>
      )}
      <div className=' d-flex justify-content-end align-items-center'>
        <span >Items per page:</span>
        <Select className='ms-2' value={rowsPerPage} onChange={handleChangeRowsPerPage}>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={21}>21</MenuItem>
        </Select>
      </div>
      <div className='pagination-box d-flex justify-content-center mt-3 mb-5'>
        <Pagination count={Math.ceil(restaurants.length / rowsPerPage)} page={page} color="primary" onChange={handleChangePage} />
      </div>
    </div>
  );
};

export default RestaurantList;