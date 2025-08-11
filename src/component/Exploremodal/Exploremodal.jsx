




import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, fetchSearchResults, clearSearch } from '../../store/searchSlice';
import { useNavigate } from 'react-router-dom';
import Logo from '../Img/Logo';
import Serchfield from '../Serchfield/Serchfield';
import './exploremodal.scss';

const ExploreModal = ({ show, onHide, dropdownInputRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query, results } = useSelector((state) => state.search);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim()) {
        dispatch(fetchSearchResults(query));
      }
    }, 400);
    return () => clearTimeout(delay);
  }, [query, dispatch]);

  useEffect(() => {
    if (!show) {
      dispatch(clearSearch());
    }
  }, [show, dispatch]);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onHide();
    }
  };

  const handleResultClick = (id) => {
    onHide();
    navigate(`/product/${id}`);
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="custom-modal">
        <div className="dropdown-child">
          <Logo />
          <Serchfield
            ref={dropdownInputRef}
            onClick={() => {}}
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />
        </div>

        <div className="search-results">
          {results?.length > 0 ? (
            <ul>
              {results.map((item) => (
                <li
                  key={item.id}
                  className="search-card"
                  onClick={() => handleResultClick(item.id)}
                >
                  <img src={item.thumbnail} alt={item.title} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          ) : query.trim() && <p>No results found</p>}
        </div>
      </div>
    </div>
  );
};

export default ExploreModal;

