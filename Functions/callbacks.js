"use strict";
var foo = function () {
    console.log('foo');
};
function bar(cb) {
    console.log('bar');
    cb();
}
bar(foo);
//# sourceMappingURL=callbacks.js.map