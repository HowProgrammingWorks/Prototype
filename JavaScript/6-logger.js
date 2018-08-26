'use strict';

const logger = (level) => {
  const color = logger.colors[level] || logger.colors.info;
  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
};

logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m'
};

const warning = logger('warning');
const error = logger('error');
const debug = logger('debug');
const slow = logger('slow');

slow('I am slow logger'); // DateTime   I am slow logger
warning('Hello'); // DateTime   Hello //#yellow
error('World'); // DateTime   World //#red
debug('Bye!'); // DateTime    Bye!
