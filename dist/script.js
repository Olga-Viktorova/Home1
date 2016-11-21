'use strict';

window.onload = function () {
    var request = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=fb92b4b2a88144d59dfb7d1dc04f25d4';

    getNews(request);
};

var getNews = function getNews(request) {
    fetch(request).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                return createListNews(data);
            });
        } else {
            console.log('Network response was not ok.');
        }
    }).catch(function (error) {
        return console.log('There has been a problem with your fetch operation: ' + error.message);
    });
};

var createListNews = function createListNews(response) {

    var divNews = document.createElement('div');
    divNews.setAttribute("class", "body");
    var header = document.createElement('div');
    header.innerHTML = response.source;
    header.setAttribute("class", "header");
    divNews.appendChild(header);

    document.body.appendChild(divNews);
    var ul = document.createElement('ul');
    divNews.appendChild(ul);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = response.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            var div = document.createElement('div');
            div.setAttribute("class", "row");
            ul.appendChild(div);
            var li = document.createElement('li');
            div.appendChild(li);

            var img = document.createElement('img');
            img.setAttribute("src", '' + value.urlToImage);
            img.setAttribute("class", "img");
            li.appendChild(img);

            var strong = document.createElement('strong');
            li.appendChild(strong);

            var a = document.createElement('a');
            a.setAttribute("href", '' + value.url);
            a.innerHTML = value.description + ' ';
            strong.appendChild(a);

            var p = document.createElement('p');
            li.appendChild(p);
            var node = document.createTextNode('' + value.title);
            p.appendChild(node);

            var publishedAt = document.createElement('div');
            publishedAt.innerHTML = "Publish at: " + ('' + value.publishedAt);
            li.appendChild(publishedAt);

            var publishedAt = document.createElement('div');
            publishedAt.innerHTML = "By: " + ('' + value.author);
            li.appendChild(publishedAt);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};