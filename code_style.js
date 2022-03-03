var j = 1;

var code = document.querySelectorAll('.code');

for (var i=0; i<code.length; i++) {

    var table = document.createElement('table');
    table.classList.add('code');

    var line = code[i].innerHTML
                      .split('\n');

    for (var r=1; r<line.length-1; r++) {
        var tr = table.insertRow();

        if (line[r].split('<a ').length > 1) {
            tr.classList.add('row-link');
        }

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

/**
window.addEventListener('resize', function() {
    var el = document.getElementById('about');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    console.log(style);
    console.log(window.innerHeight);
});
*/

function changeTheme() {
    var theme = document.body.className;

    if (theme == "light-theme") {
        document.body.className = "dark-theme";
    } else if (theme == "dark-theme") {
        document.body.className = "light-theme";
    }
}
