import { getJestProjects } from '@nx/jest';

export default {
    projects: getJestProjects(),
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    preset: 'ts-jest',
    testEnvironment: 'node',
};
