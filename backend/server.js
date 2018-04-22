require('dotenv').config()
const
  app = require('./app');

const
  port = process.env.PORT || 3000;
  appCallback = () => console.log('Express server listening on port ' + port);

app.listen(port, appCallback);