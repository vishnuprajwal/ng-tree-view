var paths = [
    ["HOME"],
    ["HOME", "Ubuntu"],
    ["HOME", "Ubuntu", "mount"],
    ["HOME", "Ubuntu", "mount", "dpOutput"],
    ["HOME", "Ubuntu", "mount", "dpOutput", "FF00359789"],
    ["HOME", "Ubuntu", "mount", "dpOutput", "FF00359789", "1"],
    ["HOME", "Ubuntu", "mount", "dpOutput", "FF00359789", "1", "IncTax"],
    ["HOME", "Ubuntu", "mount", "dpOutput", "FF00359789", "1", "IncTax", "001"],
    ["HOME", "Ubuntu", "mount", "dpOutput", "FF00359789", "1", "IncTax", "001", "screenshots"],
    ["HOME", "Ubuntu", "mount", "dpOutput", "FF00359789", "1", "IncTax", "001", "screenshots", "2016-17-ITR-4-Original.png"]
];
var tree = arrangeIntoTree(paths);
console.log(JSON.stringify(tree, null, 4));

function arrangeIntoTree(paths) {

    var tree = [];

    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        var currentLevel = tree;
        for (var j = 0; j < path.length; j++) {
            var part = path[j];

            var existingPath = findWhere(currentLevel, 'name', part);

            if (existingPath) {
                currentLevel = existingPath.children;
            } else {
                var newPart = {
                    name: part,
                    children: [],
                }
                currentLevel.push(newPart);
                currentLevel = newPart.children;
            }
        }
    }

    return tree;

    function findWhere(array, key, value) {
        while (t < array.length && array[t][key] !== value) { t++; };

        if (t < array.length) {
            return array[t]
        } else {
            return false;
        }
    }
}