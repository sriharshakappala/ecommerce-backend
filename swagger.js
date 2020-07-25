const pkg = require('./package.json');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'E-Commerce Backend',
    description: 'E-Commerce backend API service',
    version: pkg.version,
  },
};

const optionsV1 = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/api/v1/*.js', './routes/definitions.js'],
};

exports.swaggerSpecV1 = swaggerJSDoc(optionsV1);
