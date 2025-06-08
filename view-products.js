const Database = require('better-sqlite3');
const path = require('path');

// Get the absolute path to the database file
const dbPath = path.resolve('./ecommerce1/medicinae.db');
console.log(`Using database at: ${dbPath}`);

try {
  const db = new Database(dbPath);

  // Show products data
  console.log('\n=== PRODUCTS TABLE DATA ===');
  const products = db.prepare('SELECT * FROM products').all();
  
  if (products.length === 0) {
    console.log('No products found in database');
  } else {
    console.log(`Found ${products.length} products:`);
    
    // Display each product
    products.forEach((product, index) => {
      console.log(`\n--- Product ${index + 1} ---`);
      console.log(`ID: ${product.id}`);
      console.log(`Name: ${product.name}`);
      console.log(`Description: ${product.description || 'N/A'}`);
      console.log(`Price: ${product.price}`);
      console.log(`Category: ${product.category || 'N/A'}`);
      console.log(`Image URL: ${product.image_url || 'N/A'}`);
    });
  }

  // Close the database connection
  db.close();
  console.log('\nDatabase connection closed.');
} catch (err) {
  console.error(`Database error: ${err.message}`);
} 