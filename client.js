const superagent = require('superagent');
const assert = require('assert');

require('xdomain'); // commenting this line will make the assertion below pass

superagent.get('/api').then(res => {
  assert.equal(res.header.z, 'z');
});
