
// export import  =>  webpack2原生支持
// amd
// require

console.log('I am index')

// require.ensure(dependencies: String[], callback: function(require), chunkName: String)

require('./split');

import * as Test from './split.js';