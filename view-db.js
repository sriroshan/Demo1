const Database = require('better-sqlite3');
const path = require('path');

// Get the absolute path to the database file
const dbPath = path.resolve('./ecommerce1/medicinae.db');
console.log(`Using database at: ${dbPath}`);

try {
  const db = new Database(dbPath);

  // 1. Show all tables
  console.log('\n=== DATABASE TABLES ===');
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").all();
  
  if (tables.length === 0) {
    console.log('No tables found in database');
  } else {
    console.log('Available tables:');
    tables.forEach(table => console.log(`- ${table.name}`));
  }

  // 2. Show row counts for each table
  console.log('\n=== TABLE ROW COUNTS ===');
  tables.forEach(table => {
    try {
      const countResult = db.prepare(`SELECT COUNT(*) as count FROM ${table.name}`).get();
      console.log(`${table.name}: ${countResult.count} rows`);
    } catch (err) {
      console.log(`${table.name}: Error counting rows - ${err.message}`);
    }
  });

  // 3. For each main table, show column names
  console.log('\n=== TABLE STRUCTURES ===');
  const mainTables = ['products', 'orders', 'addresses', 'users'];
  
  mainTables.forEach(tableName => {
    if (tables.some(t => t.name === tableName)) {
      try {
        const columns = db.prepare(`PRAGMA table_info(${tableName})`).all();
        console.log(`\n${tableName} columns:`);
        columns.forEach(col => {
          console.log(`- ${col.name} (${col.type})${col.pk ? ' PRIMARY KEY' : ''}${col.notnull ? ' NOT NULL' : ''}`);
        });
      } catch (err) {
        console.log(`Error getting schema for ${tableName}: ${err.message}`);
      }
    }
  });

  // Close the database connection
  db.close();
  console.log('\nDatabase connection closed.');
} catch (err) {
  console.error(`Database error: ${err.message}`);
} 