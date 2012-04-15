var fs = require('fs');

var input = fs.readFileSync('input', 'utf8');
    numbers = input.replace(/\n/g, ' ').split(' ');

var q = {
    numbers: numbers,
    cnt: 0,
    shift: function() {
        return parseInt(numbers[this.cnt++]);
    }
};

var T = q.shift();
var output = '';

for (var x = 1; x <= T; x++) {
    var N = q.shift(), S = q.shift(), p = q.shift();

    var scores = [];

    // read numbers
    while (N-- != 0)
        scores.push(q.shift());

    var cnt = 0, score, min, max;

    min = p + Math.max(2 * p - 4, 0);
    max = p + Math.max(2 * p - 2, 0);

    for (var i = 0; i < scores.length; i++) {
        score = scores[i];

        if (score >= max)
            cnt++;
        else if (score >= min && S != 0) {
            cnt++;
            S--;
        }
    }

    output += 'Case #' + x + ': ' + cnt + '\n';
}

fs.writeFile('output', output);
