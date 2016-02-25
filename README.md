# cssstats-server

A simple [Hapi](http://hapijs.com/) server that returns a
[cssstats](https://github.com/cssstats/cssstats) object given a URL.

```
curl http://localhost:5000?url=http://google.com
```

## TODO

- [ ] Tests
- [ ] Break up into Hapi plugins
- [ ] Metrics
- [ ] Exception tracking w/ Rollbar
