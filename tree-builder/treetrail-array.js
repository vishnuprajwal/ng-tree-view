// var paths = "FF00359785/1/inctax/001/ScreenShots/2016-17-ITR-4-Original.png";

var paths = ["FF00359785/1/IncTax/001/ScreenShots/2016-17-ITR-4-Original.png",
    "FF00359785/1/IncTax/001/ScreenShots/2016-17-ITR-3-Original.png", "FF00359785/1/IncTax/001/Form-26AS_2017.txt"
];

console.log(paths);
split();

// Object.assign(data.user_data, {"name": "tom"}) 
function split() {

    var myjson = null;
    var rootTree = [];

    for (var i = 0; i < paths.length; i++) {
        var arr = paths[i].split('/');
        console.log(arr);

        var npath = arr;
        debugger;
        var tree = arrangeIntoTree(rootTree, npath);
        myjson = JSON.stringify(tree, null, 5);
    }
    document.getElementById("demo").innerHTML = myjson;
}

function arrangeIntoTree(tree, npath) {

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