//init code
const mongoose = require('mongoose');
const assert = require('assert');
const db_url = process.env.DB_URL;

//connection code
mongoose.connect(
    db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    function(error,ok)
    {
        assert.equal(error,null);

        console.log('DB Connect Success...');
        console.log(ok);

    }
)