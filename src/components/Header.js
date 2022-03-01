import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/Header.css';
import logo from '../assets/images/logo3.png';

const Header = props => {
  const { categories } = props;

  const listCategories = categories.map(item => (
    <li key={item} className="nav-item">
      <a href={`/products/${item}`} className="nav-link">{item}</a>
    </li>
  ));

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark nav-list-container">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-evenly d-flex w-100">
              { listCategories }
            </ul>
          </div>
        </div>
      </nav>
      <a className="d-flex justify-content-center my-3" href="/">
        <img className="nav-logo-img img-fluid" src={logo} alt="" width="30" height="24" />
      </a>
    </header>
  );
};


const mapStateToProps = store => ({
  categories: store.categories,
});

Header.propTypes = {
  categories: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Header);
