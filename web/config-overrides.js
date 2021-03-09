const { override } = require('customize-cra');
// const { addReactRefresh } = require('customize-cra-react-refresh');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(alias({ ...configPaths('tsconfig.paths.json') }));
