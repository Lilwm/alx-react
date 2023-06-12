const { fromJs, Map} = require('immutable');

const getImmutableObject = (object) =>  fromJs(object);
export default getImmutableObject;