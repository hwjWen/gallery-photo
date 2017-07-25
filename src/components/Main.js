require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// 获取图片路径
var imageDatas = require('../data/imageData.json');
// 利用自执型函数，将图片信息转为图片路径
imageDatas = (function getImageData(img) {
    for (var i = 0, j = img.length; i < j; i++) {
        var singleImg = img[i];
        singleImg.imgUrl = require('../images/' + singleImg.fileName);
        img[i] = singleImg;
    }
    return img;
})(imageDatas);

class AppComponent extends React.Component {
    render() {
        return (
            <section className="stage">
            <section className="img-sec">

            </section>
            <nav className="controll-nav"></nav>
          </section>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;