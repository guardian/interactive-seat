import cloneDeep from 'lodash.clonedeep';

const CHALLENGES = {
    1: {
        title: 'This sweet toothed explorer likes to experiment',
        tasks: [
            {
                title: 'Can you sweeten the deal?',
                description: 'How would you use shape to make this dish sweeter?',
                options: [
                    {
                        title: 'Serve more rounded food',
                        response: 'Correct! Studies show that food in round shapes enhance the perception of sweetness.'
                    },
                    {
                        title: 'Serve more angular food',
                        response: 'Sorry – science suggests that we perceive square-ish foods tend to be more tart.'
                    }
                ]
            },
            {
                title: 'How would you like to use aroma?',
                options: [
                    {
                        title: 'Introduce the scent of vanilla to the dish',
                        Response: 'Correct! The scent of vanilla CAN make foods seem sweeter.'
                    },
                    {
                        title: 'Add nothing – this dish already smells great as it is',
                        Response: 'Sorry! Doing nothing won\'t change the taste of the food, but you’ve missed an opportunity to enhance the sweetness.'
                    }
                ]
            },
            {
                title: 'Just desserts: which colour scheme will enhance sweetness?',
                options: [
                    {
                        title: 'Serve a multi-coloured pudding',
                        Response: 'Correct! Foods that come in multiple colours trick the brain so you eat more than you would if it came in a single colour (even if it is their favourite).'
                    },
                    {
                        title: 'Stick to a single palate - what’s their favourite colour?',
                        Response: 'Sorry! This was a bit of a trick: multicoloured foods will make a person more susceptible to over-indulging - even more than a whole dish prepared in their favourite colour.'
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
                options: [
                    {
                        title: 'Serve more rounded food',
                        response: 'Correct! Studies show that food in round shapes enhance the perception of sweetness.'
                    },
                    {
                        title: 'Serve more angular food',
                        response: 'Sorry – science suggests that we perceive square-ish foods tend to be more tart.'
                    }
                ]
            },
            {
                title: 'How would you like to use aroma?',
                options: [
                    {
                        title: 'Introduce the scent of vanilla to the dish',
                        Response: 'Correct! The scent of vanilla CAN make foods seem sweeter.'
                    },
                    {
                        title: 'Add nothing – this dish already smells great as it is',
                        Response: 'Sorry! Doing nothing won\'t change the taste of the food, but you’ve missed an opportunity to enhance the sweetness.'
                    }
                ]
            },
            {
                title: 'Just desserts: which colour scheme will enhance sweetness?',
                options: [
                    {
                        title: 'Serve a multi-coloured pudding',
                        Response: 'Correct! Foods that come in multiple colours trick the brain so you eat more than you would if it came in a single colour (even if it is their favourite).'
                    },
                    {
                        title: 'Stick to a single palate - what’s their favourite colour?',
                        Response: 'Sorry! This was a bit of a trick: multicoloured foods will make a person more susceptible to over-indulging - even more than a whole dish prepared in their favourite colour.'
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
                options: [
                    {
                        title: 'Serve more rounded food',
                        response: 'Correct! Studies show that food in round shapes enhance the perception of sweetness.'
                    },
                    {
                        title: 'Serve more angular food',
                        response: 'Sorry – science suggests that we perceive square-ish foods tend to be more tart.'
                    }
                ]
            },
            {
                title: 'How would you like to use aroma?',
                options: [
                    {
                        title: 'Introduce the scent of vanilla to the dish',
                        Response: 'Correct! The scent of vanilla CAN make foods seem sweeter.'
                    },
                    {
                        title: 'Add nothing – this dish already smells great as it is',
                        Response: 'Sorry! Doing nothing won\'t change the taste of the food, but you’ve missed an opportunity to enhance the sweetness.'
                    }
                ]
            },
            {
                title: 'Just desserts: which colour scheme will enhance sweetness?',
                options: [
                    {
                        title: 'Serve a multi-coloured pudding',
                        Response: 'Correct! Foods that come in multiple colours trick the brain so you eat more than you would if it came in a single colour (even if it is their favourite).'
                    },
                    {
                        title: 'Stick to a single palate - what’s their favourite colour?',
                        Response: 'Sorry! This was a bit of a trick: multicoloured foods will make a person more susceptible to over-indulging - even more than a whole dish prepared in their favourite colour.'
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
