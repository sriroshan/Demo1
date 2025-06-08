const Database = require('better-sqlite3');
const path = require('path');

// Get the absolute path to the database file
const dbPath = path.resolve('./ecommerce1/medicinae.db');
console.log(`Using database at: ${dbPath}`);

try {
  const db = new Database(dbPath);

  // Get users count
  const countResult = db.prepare('SELECT COUNT(*) as count FROM users').get();
  
  if (countResult.count === 0) {
    console.log('\n=== USERS TABLE ===');
    console.log('No users found in database');
  } else {
    // Show all users
    console.log(`\n=== USERS TABLE (${countResult.count} users) ===`);
    const users = db.prepare(`
      SELECT 
        id,
        name,
        email,
        created_at
      FROM users
      ORDER BY created_at DESC
    `).all();
    
    users.forEach((user, index) => {
      console.log(`\n--- User #${user.id} ---`);
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`Created: ${user.created_at}`);
    });
  }

  // Close the database connection
  db.close();
  console.log('\nDatabase connection closed.');
} catch (err) {
  console.error(`Database error: ${err.message}`);
} 