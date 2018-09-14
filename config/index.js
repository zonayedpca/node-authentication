const { port, db, secret } = process.env.NODE_ENV ? require('./prod') : require('./dev');

module.exports = {
  port,
  db,
  secret
}
