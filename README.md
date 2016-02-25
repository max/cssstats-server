# cssstats-server

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/max/cssstats-server)

A simple [Hapi](http://hapijs.com/) server that returns a
[cssstats](https://github.com/cssstats/cssstats) object given a URL.

```
curl http://localhost:5000?url=http://google.com
```

## TODO

- [ ] Tests
- [ ] CI
- [ ] Break up into Hapi plugins
- [ ] Metrics
- [ ] Exception tracking w/ Rollbar
