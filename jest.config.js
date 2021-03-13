module.exports = {
    ...require('./test/jest-common'),
    collectCoverageFrom: ['**/src/**/*.(ts|tsx)', '!**/__tests__/**', '!**/node_modules/**'],
    coverageThreshold: {
        global: {
            statements: 15,
            branches: 10,
            functions: 15,
            lines: 15,
        },
    },
    projects: ['./test/jest.client.js'],
};
