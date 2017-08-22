require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

let imageDatas = require('../data/imagesData.json');
imageDatas = (function genImageUrl(imageDataArr) {
  for (var i in imageDataArr) {
    var singleImageData = imageDataArr[i];
    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
    imageDataArr[i] = singleImageData
  }
  return imageDataArr
})(imageDatas);


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
