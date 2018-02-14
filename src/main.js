import _ from 'lodash';

const doStuff = () => {
    const node = document.querySelector('#root');
    node.innerHTML = _.kebabCase('I Love Kebab Case');
};

doStuff();
