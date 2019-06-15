import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import { loadImages, changeInput, loadMoreImages } from '../../redux/actions';
import './ImageGrid.css';
import Search from '../Search/Search';

class ImageGrid extends Component {
  onChangeInput = e => {
    this.props.changeInput(e.target.value);
  };

  onKeyPressed = e => {
    if (e.charCode === 13) {
      this.props.loadImages();
    }
  };

  render() {
    const {
      isLoading,
      isLoadingMore,
      images,
      error,
      input,
      loadImages,
      loadMoreImages
    } = this.props;
    return (
      <Fragment>
        <div className="header">
          <div className="logo">Image Basket</div>
          <Search
            onChangeInput={this.onChangeInput}
            value={input}
            onKeyPressed={this.onKeyPressed}
            placeholder="Search image"
            autoFocus
          />
          <Button
            onClick={() => !isLoading && loadImages()}
            loading={isLoading}
            disabled={input === ''}
            autoFocus={true}
          >
            Search
          </Button>
        </div>
        <div className="content">
          <section className="grid">
            {images.map(image => (
              <div key={image} className="item">
                <img src={image} alt="img" />
              </div>
            ))}
          </section>
          {error && <div className="error">{JSON.stringify(error)}</div>}
          {images && images.length !== 0 && !isLoading && (
            <Button onClick={() => !isLoadingMore && loadMoreImages()} loading={isLoadingMore}>
              Load More
            </Button>
          )}
        </div>
        {(isLoading || isLoadingMore) && (
          <div className="loader">
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error, input, isLoadingMore }) => ({
  isLoading,
  isLoadingMore,
  images,
  error,
  input
});

const mapDispatchToProps = dispatch => ({
  changeInput: input => dispatch(changeInput(input)),
  loadImages: () => dispatch(loadImages()),
  loadMoreImages: () => dispatch(loadMoreImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGrid);
