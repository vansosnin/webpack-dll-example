const path = require('path');

const appRoot = __dirname;
const distRoot = path.join(appRoot, 'dist');

module.exports = {
    buildDirectory: path.join(distRoot, 'app'),
    dllDirectory: path.join(distRoot, 'dll', process.env.NODE_ENV),
    srcDirectory: path.join(appRoot, 'src'),
};
