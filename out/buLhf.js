goog.provide('hello');
goog.require('cljs.core');
hello.greet = (function greet(n){return [cljs.core.str("This came from hello.cljs and input to func is this: "),cljs.core.str(n)].join('');
});
goog.exportSymbol('hello.greet', hello.greet);
