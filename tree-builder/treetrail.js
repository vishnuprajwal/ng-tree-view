var paths = "FF00359785/1/inctax/001/ScreenShots/2016-17-ITR-4-Original.png";

console.log(paths);
split();


function split() {
    var arr = paths.split('/');
    console.log(arr);

    var npath = arr;
    var tree = arrangeIntoTree(npath);

    var myjson = (JSON.stringify(tree, null, 5));
    document.getElementById("demo").innerHTML = myjson;

}

function arrangeIntoTree(npath) {

    var tree = [];


    for (var i = 0; i < npath.length; i++) {
        var path = npath[i];
        // console.log(npath[i]);

        var currentLevel = tree;
        for (var j = 0; j < npath.length; j++) {
            var part = npath[j];

            // console.log(path);

            var existingPath = findWhere(currentLevel, 'text', part);

            if (existingPath) {
                currentLevel = existingPath.items;
            } else {
                var newPart = {
                    text: part,
                    items: [],
                }

                currentLevel.push(newPart);
                currentLevel = newPart.items;
            }
        }
    }

    return tree;

    function findWhere(array, key, value) {

        t = 0;
        while (t < array.length && array[t][key] !== value) { t++; };

        if (t < array.length) {
            return array[t]
        } else {
            return false;
        }
    }
}