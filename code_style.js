var j = 1;

var code = document.querySelectorAll('.code');

for (var i=0; i<code.length; i++) {

    var table = document.createElement('table');
    table.classList.add('code');

    var line = code[i].innerHTML
                      .split('\n');

    for (var r=1; r<line.length-1; r++) {
        var tr = table.insertRow();

        var td = tr.insertCell();
        td.appendChild(document.createTextNode(j));
        j += 1

        var cl = line[r].split('~!');

        for (var c=0; c<cl.length; c++) {
            var td = tr.insertCell();
            td.innerHTML = cl[c]
        }
    }
    code[i].innerHTML = '';
    code[i].appendChild(table);
}
