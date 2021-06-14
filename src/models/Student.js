const _ = require('lodash');

function Student(title, cast) {
  _.extend(this, {
    title: title,
    cast: cast.map(function (c) {
      return {
        name: c[0],
      }
    })
  });
}

module.exports = MovieCast;
