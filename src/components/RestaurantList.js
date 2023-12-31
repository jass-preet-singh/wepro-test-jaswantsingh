import React, { useEffect, useState } from 'react';
import { fetchRestaurantList } from '../services/api';
import SingleRestaurant from './SingleRestaurant';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';

const RestaurantList = () => {
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const searchQuery = useSelector((state) => state.search);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true)
      try {
        const response = await fetchRestaurantList();
        setOriginalRestaurants(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false)
    };

    fetchRestaurants();
  }, []);


  useEffect(() => {
    if (originalRestaurants.length > 0) {
      let filtered = originalRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // rating filter
      if (filters.maxRating !== null) {
        filtered = filtered.filter((restaurant) => restaurant.rating <= filters.maxRating * 20);
      }

      // sorting order
      if (filters.sortOrder === 'asc') {
        filtered = filtered.sort((a, b) => a.rating - b.rating);
      } else {
        filtered = filtered.sort((a, b) => b.rating - a.rating);
      }

      setFilteredRestaurants(filtered);
    }
  }, [searchQuery, originalRestaurants, filters?.maxRating, filters?.sortOrder]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  console.log(filters)

  return (
    <div className='container-box'>
      {loading ? (
        <div className="text-center">
          <strong>Loading...</strong>
        </div>
      ) : filteredRestaurants?.length > 0 ? (
        <div className='row'>
          {filteredRestaurants?.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((restaurant, index) => (
            <div className='col-md-4 mb-4' key={index}>
              <SingleRestaurant restaurant={restaurant} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <strong>Records not found</strong>
        </div>
      )}

      {!loading && filteredRestaurants?.length > 0 && (
        <>
          <div className=' d-flex justify-content-end align-items-center'>
            <span >Items per page:</span>
            <Select className='ms-2' value={rowsPerPage} onChange={handleChangeRowsPerPage}>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </div>
          <div className='pagination-box d-flex justify-content-center mt-3 mb-5'>
            <Pagination count={Math.ceil(filteredRestaurants?.length / rowsPerPage)} page={page} color="primary" onChange={handleChangePage} />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantList;

