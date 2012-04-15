var fs = require('fs');

var codes = JSON.parse(fs.readFileSync('code.json')),
    input = fs.readFileSync('input', 'utf8');

input = input.replace('\r', '\n');

var output = '',
    lines = input.split('\n'),
    n = parseInt(lines[0]) + 1;

for (var i = 1; i < n; i++) {
    output += 'Case #' + i + ': ';

    var line = lines[i];
    var buffered = '';
    for (var j = 0; j < line.length; j++)
        buffered += codes[line[j]];

    output += buffered + '\n';
}

fs.writeFile('output', output);
