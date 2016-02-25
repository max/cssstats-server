'use strict';

const Boom     = require('boom');
const cssstats = require('cssstats');
const getCss   = require('get-css');
const Hapi     = require('hapi');
const Joi      = require('joi');

const server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 5000
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    if (request.query.url) {
      getCss(request.query.url, { timeoute: 5000 })
        .then(function(response) {
          console.log(request.query.url)
          return reply(cssstats(response.css));
        })
        .catch(function(error) {
          console.error(error);
        });
    } else {
      return reply(Boom.badRequest('specify url'));
    }
  },
  config: {
    validate: {
      query: {
        url: Joi.string().uri({
          scheme: [
            'http',
            'https'
          ]
        })
      }
    }
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
