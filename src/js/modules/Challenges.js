import cloneDeep from 'lodash.clonedeep';

const CHALLENGES = {
    1: {
        title: 'This sweet toothed explorer likes to experiment',
        tasks: [
            {
                title: 'Can you sweeten the deal?',
                description: 'How would you use shape to make this dish sweeter?',
                partials: ['place-setting-normal'],
                isActive: true,
                options: [
                    {
                        id: 'heavy',
                        title: 'Serve more rounded food',
                        response: 'Correct! Studies show that food in round shapes enhance the perception of sweetness.',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Serve more angular food',
                        response: 'Sorry – science suggests that we perceive square-ish foods tend to be more tart.',
                        isCorrect: false
                    }
                ]
            },
            {
                title: 'Can you sweeten the deal?',
                description: 'How would you like to use aroma?',
                partials: ['place-setting-normal'],
                isActive: false,
                options: [
                    {
                        id: 'heavy',
                        title: 'Introduce the scent of vanilla to the dish',
                        response: 'Correct! The scent of vanilla CAN make foods seem sweeter.',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Add nothing – this dish already smells great as it is',
                        response: 'Sorry! Doing nothing won\'t change the taste of the food, but you’ve missed an opportunity to enhance the sweetness.',
                        isCorrect: false
                    }
                ]
            },
            {
                title: 'Can you sweeten the deal?',
                description: 'Just desserts: which colour scheme will enhance sweetness?',
                partials: ['place-setting-normal'],
                isActive: false,
                options: [
                    {
                        id: 'heavy',
                        title: 'Serve a multi-coloured pudding',
                        response: 'Correct! Foods that come in multiple colours trick the brain so you eat more than you would if it came in a single colour (even if it is their favourite).',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Stick to a single palate - what’s their favourite colour?',
                        response: 'Sorry! This was a bit of a trick: multicoloured foods will make a person more susceptible to over-indulging - even more than a whole dish prepared in their favourite colour.',
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    2: {
        title: 'This sweet toothed explorer likes to experiment',
        tasks: [
            {
                title: 'Can you sweeten the deal?',
                description: 'How would you use shape to make this dish sweeter?',
                partials: ['place-setting-normal'],
                isActive: true,
                options: [
                    {
                        id: 'heavy',
                        title: 'Serve more rounded food',
                        response: 'Correct! Studies show that food in round shapes enhance the perception of sweetness.',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Serve more angular food',
                        response: 'Sorry – science suggests that we perceive square-ish foods tend to be more tart.',
                        isCorrect: false
                    }
                ]
            },
            {
                title: 'Can you sweeten the deal?',
                description: 'How would you like to use aroma?',
                partials: ['place-setting-normal'],
                isActive: false,
                options: [
                    {
                        id: 'heavy',
                        title: 'Introduce the scent of vanilla to the dish',
                        response: 'Correct! The scent of vanilla CAN make foods seem sweeter.',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Add nothing – this dish already smells great as it is',
                        response: 'Sorry! Doing nothing won\'t change the taste of the food, but you’ve missed an opportunity to enhance the sweetness.',
                        isCorrect: false
                    }
                ]
            },
            {
                title: 'Can you sweeten the deal?',
                description: 'Just desserts: which colour scheme will enhance sweetness?',
                partials: ['place-setting-normal'],
                isActive: false,
                options: [
                    {
                        id: 'heavy',
                        title: 'Serve a multi-coloured pudding',
                        response: 'Correct! Foods that come in multiple colours trick the brain so you eat more than you would if it came in a single colour (even if it is their favourite).',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Stick to a single palate - what’s their favourite colour?',
                        response: 'Sorry! This was a bit of a trick: multicoloured foods will make a person more susceptible to over-indulging - even more than a whole dish prepared in their favourite colour.',
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    3: {
        title: 'This sweet toothed explorer likes to experiment',
        tasks: [
            {
                title: 'Can you sweeten the deal?',
                description: 'How would you use shape to make this dish sweeter?',
                partials: ['place-setting-normal'],
                isActive: true,
                options: [
                    {
                        id: 'heavy',
                        title: 'Serve more rounded food',
                        response: 'Correct! Studies show that food in round shapes enhance the perception of sweetness.',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Serve more angular food',
                        response: 'Sorry – science suggests that we perceive square-ish foods tend to be more tart.',
                        isCorrect: false
                    }
                ]
            },
            {
                title: 'Can you sweeten the deal?',
                description: 'How would you like to use aroma?',
                partials: ['place-setting-normal'],
                isActive: false,
                options: [
                    {
                        id: 'heavy',
                        title: 'Introduce the scent of vanilla to the dish',
                        response: 'Correct! The scent of vanilla CAN make foods seem sweeter.',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Add nothing – this dish already smells great as it is',
                        response: 'Sorry! Doing nothing won\'t change the taste of the food, but you’ve missed an opportunity to enhance the sweetness.',
                        isCorrect: false
                    }
                ]
            },
            {
                title: 'Can you sweeten the deal?',
                description: 'Just desserts: which colour scheme will enhance sweetness?',
                partials: ['place-setting-normal'],
                isActive: false,
                options: [
                    {
                        id: 'heavy',
                        title: 'Serve a multi-coloured pudding',
                        response: 'Correct! Foods that come in multiple colours trick the brain so you eat more than you would if it came in a single colour (even if it is their favourite).',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Stick to a single palate - what’s their favourite colour?',
                        response: 'Sorry! This was a bit of a trick: multicoloured foods will make a person more susceptible to over-indulging - even more than a whole dish prepared in their favourite colour.',
                        isCorrect: false
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
