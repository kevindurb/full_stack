import fastify from 'fastify';
import pov from 'point-of-view';
import * as pug from 'pug';
import * as path from 'path';

const server = fastify();

server.register(pov, {
  engine: {
    pug,
  },
  root: path.join(__dirname, 'views'),
})

server.get('/', async (request, reply) => {
  return reply.view('index.pug');
})

server.listen('8080', () => {
  console.log('server listening');
})
