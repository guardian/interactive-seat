import cloneDeep from 'lodash.clonedeep';

const CHALLENGES = {
    1: {
        title: 'This sweet toothed explorer avoids bland food at all cost',
        tasks: [
            {
                title: 'Can you sweeten a bland deal?',
                description: 'How would you use shape to make this dish seem sweeter?',
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
                        response: 'Sorry – science suggests that we perceive square-ish foods to be more tart.',
                        isCorrect: false
                    }
                ]
            },
            {
                title: 'Can you sweeten the deal?',
                description: 'How would you like to use aroma?',
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
            }
        ]
    },
    2: {
        title: 'The fine diner who will fork out for a great meal – if it’s worth it',
        tasks: [
            {
                title: 'What’s going to make this a classy night to remember?',
                description: 'How would you serve your classy?',
                options: [
                    {
                        id: 'heavy',
                        title: 'Keep it classy: time to bring out the fine China',
                        response: 'Sorry! Though fancy-looking, current science suggests that it’s heavier wares that make a meal feel more expensive.',
                        isCorrect: false
                    },
                    {
                        id: 'light',
                        title: 'Beef it up with heavy cutlery and sturdy crockery',
                        response: 'Correct! Hefty bowls and weighty cutlery add an air of quality to a meal.',
                        isCorrect: true
                    }
                ]
            },
            {
                title: 'What’s going to make this a classy night to remember?',
                description: 'What are you going to Which sounds like it would be more expensive?',
                options: [
                    {
                        id: 'heavy',
                        title: 'Hire a string quartet to bust out some Brahms',
                        response: 'Correct! It probably comes as no surprise that classical music is often perceived as the marker of a quality experience.',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Keep it silent: let people enjoy their conversations for once ',
                        response: 'Sorry! Silence can make a room feel empty – music is one of the most powerful dining cues we have.',
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    3: {
        title: 'A grey panther in danger of eating too little… and adding too much salt when he does',
        tasks: [
            {
                title: 'Can you make him go back for a second-helping (but hold the salt)?',
                description: 'Which sounds saltier to you?',
                options: [
                    {
                        id: 'heavy',
                        title: 'Pump up the bass: fill the room with low background music',
                        response: 'Correct! Studies show that playing low-pitched music increases the perceived umami-ness of a meal - do that, and you reduce the need for additional salt in food.',
                        isCorrect: true
                    },
                    {
                        id: 'light',
                        title: 'Pump up the volume: fill the room with loud background music',
                        response: 'Sorry! This won\'t do anything except annoy your patrons - there\'s a difference between great atmosphere and not being able to hear each other.',
                        isCorrect: false
                    }
                ]
            },
            {
                title: 'Can you make him go back for a second-helping (but hold the salt)?',
                description: 'Just desserts: which colour scheme boosts the appetite?',
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
