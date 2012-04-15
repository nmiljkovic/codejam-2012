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
    var A = q.shift(), B = q.shift();

    var cnt = 0;
    for (var i = A; i <= B; i++) {
        var astr = ''+i, temp = i;
        var alen = astr.length;
        
        for (var j = 0; j < (alen - 1); j++) {
            // shifting the number
            var mod = temp % 10;
            temp = (temp - mod) / 10 + mod * Math.pow(10, alen - 1);

            // if we got the same number, then we break out of the loop
            if (temp == i)
                break;

            // only if the shifted number is greater than current
            // and it's lesser than B
            if (temp > i && temp <= B)
                cnt++;
        }
    }
    output += 'Case #' + x + ': ' + cnt + '\n';
}

fs.writeFile('output', output);
