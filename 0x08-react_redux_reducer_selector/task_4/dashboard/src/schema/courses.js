import Immutable from 'immutable';

const courseSchema = Immutable.Map({
    id: Immutable.Map({
        type: 'number',
    }),
    name: Immutable.Map({
        type: 'string',
    }),
    description: Immutable.Map({
        type: 'string',
    }),
});

export function courseNormalizer(data) {
    return courseSchema.merge(data);
}