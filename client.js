const superagent = require('superagent');
const assert = require('assert');

require('xhook'); // commenting this line will make the assertion below pass

superagent.get('/api').then(res => {
  assert.equal(res.header.z, 'z');
});
