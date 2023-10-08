const uniqid = require("uniqid");

const cubes = [
    {
        id: '51r28k8lnhiqeuq',
        name: 'Eco-Dark',
        description: 'The best looking rubix cube out there!',
        imageUrl: 'https://thingsidesire.com/wp-content/uploads/2018/06/Eco-Dark-Rubik%E2%80%99s-Cube2.jpg',
        difficultyLevel: 6
    },
    {
        id: '51r28k8lnhitt68',
        name: 'Pyraminx',
        description: 'Amazing egyptian pyramid style cube!',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61izOzq%2BBAL._SY355_.jpg',
        difficultyLevel: 1
    },
    {
        id: '51r28k8lnhitt68',
        name: 'Megaminx',
        description: 'Interesting form for a cube!',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg',
        difficultyLevel: 3
    }
];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}

exports.getAll = (search, from, to) => {
    let filterCubes = [...cubes];
    if (search) {
        filterCubes = filterCubes.filter((cube) => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        filterCubes = filterCubes.filter((cube) => cube.difficultyLevel >= Number(from));
    }
    if (to) {
        filterCubes = filterCubes.filter((cube) => cube.difficultyLevel <= Number(to));
    }

    return filterCubes;
}

exports.getSingleCube = (id) => {
    return cubes.find((cube) => cube.id === id);
}