import cloneDeep from 'lodash.clonedeep';

const CHALLENGES = {
    1: {
        title: 'Looking for extravangace',
        numberOfTries: 5,
        objects: [
            {
                id: 'plate-shape',
                title: 'Plate Shape',
                src: '/assets/img/plate.png',
                options: [
                    {
                        id: 'angular',
                        title: 'Angular',
                        correct: true
                    },
                    {
                        id: 'round',
                        title: 'Round',
                        correct: false
                    }
                ]
            },
            {
                id: 'plate-colour',
                title: 'Plate Colour',
                src: '/assets/img/plate.png',
                options: [
                    {
                        id: 'white',
                        title: 'White',
                        correct: true
                    },
                    {
                        id: 'black',
                        title: 'Black',
                        correct: false
                    }
                ]
            }
        ]
    },
    2: {
        title: 'Looking for sweetness',
        numberOfTries: 5,
        objects: [
            {
                id: 'cutlery-shape',
                title: 'Cutlery Shape',
                src: '/assets/img/plate.png',
                options: [
                    {
                        id: 'angular',
                        title: 'Angular',
                        correct: false
                    },
                    {
                        id: 'round',
                        title: 'Round',
                        correct: true
                    }
                ]
            },
            {
                id: 'cutlery-weight',
                title: 'Cutlery Weight',
                src: '/assets/img/plate.png',
                options: [
                    {
                        id: 'light',
                        title: 'Light',
                        correct: true
                    },
                    {
                        id: 'heavy',
                        title: 'Heavy',
                        correct: false
                    }
                ]
            }
        ]
    },
    3: {
        title: 'Looking for big flavour',
        numberOfTries: 5,
        objects: [
            {
                id: 'music',
                title: 'Music',
                src: '/assets/img/plate.png',
                options: [
                    {
                        id: 'jazz',
                        title: 'Jazz',
                        correct: false
                    },
                    {
                        id: 'techno',
                        title: 'Techno',
                        correct: true
                    }
                ]
            },
            {
                id: 'lighting',
                title: 'Lighting',
                src: '/assets/img/plate.png',
                options: [
                    {
                        id: 'dim',
                        title: 'Dim',
                        correct: true
                    },
                    {
                        id: 'bright',
                        title: 'Bright',
                        correct: false
                    }
                ]
            }
        ]
    }
};

const Challenges = {
    get() {
        return cloneDeep(CHALLENGES);
    },
    getById(id) {
        return cloneDeep(CHALLENGES[id]);
    }
};

export default Challenges;
