const fs = require('fs');
const path = require('path');

// Define the database file path
const dbPath = path.join(__dirname, 'medicinae.db');

// Check if the database file exists
if (fs.existsSync(dbPath)) {
  // Delete the database file
  try {
    fs.unlinkSync(dbPath);
    console.log('Database file deleted successfully.');
  } catch (error) {
    console.error('Error deleting database file:', error);
    console.log('You may need to stop the application first, as it might be using the database.');
  }
} else {
  console.log('Database file does not exist.');
}

console.log('Database will be recreated when you start the application.'); 