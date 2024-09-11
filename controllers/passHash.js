import bcrypt from "bcryptjs";

async function hashing(passRounds, password) {
  const salt = await bcrypt.genSalt(passRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

async function compare(password, hash) {
  const result = await bcrypt.compare(password, hash);
  return result;
}

export { hashing, compare };

/////// Bcrypt Methods
/*
const bcrypt = require('bcryptjs');

// Password to be hashed
const password = 'yourPassword';

// Generate a salt
bcrypt.genSalt(10, (err, salt) => {
  if (err) throw err;

  // Hash the password using the generated salt
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) throw err;

    // Store the hashed password (e.g., in your database)
    console.log('Hashed Password:', hash);

    // To verify the password later
    bcrypt.compare(password, hash, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        console.log('Password matches!');
      } else {
        console.log('Password does not match.');
      }
    });
  });
});
*/
