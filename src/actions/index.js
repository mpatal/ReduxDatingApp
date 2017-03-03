import chalk from 'chalk';
/*eslint-disable no-console */
export function selectBook(book) {
    console.log(chalk.blue(`A book has been selected ${book.title}`));
    // selectBook is an ActionCreator, it needs to return an action, an object with a type property
    return {
        type: 'BOOK_SELECTED', //TODO:: certain conventions with defining type preferably in a const file centralized for the whole app for now keep it simple
        payload: book
    };
}