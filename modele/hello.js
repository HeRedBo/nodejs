'use strict';
var s = "Hello ";
function greet(name)
{
    console.log(s + ',' + name + '!');
}

function hi(name)
{
    console.log('hi' + name + '!');
}

function goodbye(name)
{
    console.log('GoodBye ' + name + '!');
}

module.exports = {
    greet : greet,
    hi    : hi,
    goodbye: goodbye,
}