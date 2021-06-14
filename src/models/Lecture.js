const _ = require('lodash');

function Lecture(_node) {
  _.extend(this, _node.properties);

  if (this.id) {
    this.id = this.id.toNumber();
  }
  if (this.category) {
    this.category = this.category.toString();
  }
  if (this.time) {
    this.time = this.time.toString();
  }
  if (this.session) {
    this.session = this.session.toString();
  }
  if (this.votes) {
    this.votes = this.votes.toNumber();
  } else {
    this.votes = 0;
  }
}

module.exports = Movie;
