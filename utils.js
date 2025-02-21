import dotenv from "dotenv";
dotenv.config();

export const processData = (data) => {
  const numbers = data.filter((item) => /^\d+$/.test(item));
  const alphabets = data.filter((item) => /^[A-Za-z]$/.test(item));
  const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

  return {
    is_success: true,
    user_id: process.env.USER_ID,
    email: process.env.EMAIL,
    roll_number: process.env.ROLL_NUMBER,
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet
  };
};
