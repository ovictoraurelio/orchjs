# OrchJS

Orchestrate queue jobs at multi hosts by space or cpu time

## CAUTION NO ONE RELEASE DONE YET

## Usage    

We have a API to register new process, register hosts, list them status, inform for a foreign request for a resource (host memory/cputime).

- Each host is a object that have Memory and CpuTime rules.
- Each process is executed inside a host.

So to use OrchJS in you need any storage type like Json, MySQL, PostgreSQL, in .ENV you set your preferences and we do installation for you.

### API Tips

Strongly recommend to hosting API in a private network, like a Docker Network or Google Private Network, Amazon Private Network etc.

### Process comunication use Sockets
This tell to orchjs that process0 want to be execute
```
    socket.emit('requestExecution', {
        name: 'process_0', 
        key: 'keyUniqueForEachProcess',
        memory: 300,
        cpuTime: 3
    });
```
This function will be triggered when process can run
```
    socket.on('onExecution', callbackFn);
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/ovictoraurelio/orchjs/issues)

###  Installing project for contributing

```js
git clone https://github.com/ovictoraurelio/orchjs
npm install -g gulp gulp-cli
npm install 
```
#### Usage

```js
  gulp 
```

## Authors

[Victor Aurélio]

[Victor Aurélio]: <http://victoraurelio.com>
