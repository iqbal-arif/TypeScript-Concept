let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

// Stating NEVER will show the intention that this code will never return anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);

// This code blow will never run as after error code the app crashes.
const result = generateError('An error occurred', 500);
console.log(result);
