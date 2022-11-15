/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
   './src/application/domain/validate.create.user.ts',
   './src/application/domain/validate.update.user.ts',
   './src/application/domain/constraints/get.list.user.constraints.ts',
   './src/application/domain/constraints/create.user.constraints.ts',
   './src/application/domain/constraints/update.user.constraints.ts',
   './src/application/services/**/*.ts',
   './src/shared/error/**/*.ts',
   './src/shared/either.ts',
  ]
};