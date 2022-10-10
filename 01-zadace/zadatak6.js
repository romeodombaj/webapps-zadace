import camelCase from 'camelcase';

function velikoSlovo(str) {
    console.log(camelCase(str, { pascalCase: false }));
}

const str = 'web apps vjezbe';
velikoSlovo(str);