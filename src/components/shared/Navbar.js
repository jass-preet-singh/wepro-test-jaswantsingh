import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import Favorites from '../Favorites';
import { setSearch } from '../../redux/reducers/searchSlice';
import { Divider, MenuItem, Select } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Menu from '@mui/material/Menu';
import { setMaxRating, setSortOrder } from '../../redux/reducers/filterSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const favorites = useSelector((state) => state.favorites);
  const searchQuery = useSelector((state) => state.selectSearch);
  const filters = useSelector((state) => state.filters);

  const handleSearchChange = (event) => {
    dispatch(setSearch(event.target.value));
  };
  const openPopup = () => {
    if (favorites?.length > 0) {
      setPopupOpen(true);
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleSortOrderChange = (e) => {
    dispatch(setSortOrder(e.target.value));
  };

  const handleMaxRatingChange = (e) => {
    dispatch(setMaxRating(e.target.value));
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className='navbar-box'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Jass Restaurants
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => { handleSearchChange(e) }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Badge onClick={() => { openPopup() }} badgeContent={favorites?.length} color="primary" className='mx-3'>
            <FavoriteIcon />
          </Badge>
          <IconButton aria-label="">
            <FilterAltIcon className='text-white' onClick={() => { setMenuOpen(!isMenuOpen) }} />
          </IconButton>
          <Menu
          className='filter-menu'
            open={isMenuOpen}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <div className='px-3 mb-2'>
              <span>Sort Order:</span>
              <Select className='ms-2' value={filters.sortOrder} onChange={handleSortOrderChange}>
                <MenuItem value='asc'>Asc</MenuItem>
                <MenuItem value='desc'>Desc</MenuItem>
              </Select>
            </div>
            <Divider />
            <div className='px-3'>
              <span>Max Rating:</span>
              <Select className='ms-2' value={filters.maxRating} onChange={handleMaxRatingChange}>
                <MenuItem value={null}>None</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={1}>1</MenuItem>
              </Select>
            </div>
          </Menu>
        </Toolbar>
      </AppBar>
      <Favorites isOpen={isPopupOpen} onClose={() => { closePopup() }} />
    </Box>

  )
}

export default Navbar