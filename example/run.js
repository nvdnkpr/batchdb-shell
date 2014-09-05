var batchdb = require('../');
var db = require('level')('/tmp/compute.db');
var compute = batchdb(db, { path: '/tmp/compute.blobs' });

compute.on('result', function (key, id) {
    console.log('RESULT', id);
});

compute.run();
