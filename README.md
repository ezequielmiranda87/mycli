# mycli

Mycli application

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mycli.svg)](https://npmjs.org/package/mycli)
[![Downloads/week](https://img.shields.io/npm/dw/mycli.svg)](https://npmjs.org/package/mycli)
[![License](https://img.shields.io/npm/l/mycli.svg)](https://github.com/ezequielmiranda87/mycli/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g mycli
$ mycli COMMAND
running command...
$ mycli (-v|--version|version)
mycli/0.0.0 darwin-x64 node-v11.15.0
$ mycli --help [COMMAND]
USAGE
  $ mycli COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`mycli hello [FILE]`](#mycli-hello-file)
- [`mycli help [COMMAND]`](#mycli-help-command)

## `mycli hello [FILE]`

describe the command here

```
USAGE
  $ mycli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mycli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ezequielmiranda87/mycli/blob/v0.0.0/src/commands/hello.ts)_

## `mycli help [COMMAND]`

display help for mycli

```
USAGE
  $ mycli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

<!-- commandsstop -->
