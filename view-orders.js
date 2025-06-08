const Database = require('better-sqlite3');
const path = require('path');

// Get the absolute path to the database file
const dbPath = path.resolve('./ecommerce1/medicinae.db');
console.log(`Using database at: ${dbPath}`);

try {
  const db = new Database(dbPath);

  // 1. Get orders count
  const countResult = db.prepare('SELECT COUNT(*) as count FROM orders').get();
  
  if (countResult.count === 0) {
    console.log('\n=== ORDERS TABLE ===');
    console.log('No orders found in database');
  } else {
    // 2. Show all orders
    console.log(`\n=== ORDERS TABLE (${countResult.count} orders) ===`);
    const orders = db.prepare(`
      SELECT 
        orders.id,
        orders.user_id,
        orders.product_id,
        orders.product_name,
        orders.amount,
        orders.payment_id,
        orders.status,
        orders.created_at
      FROM orders
      ORDER BY orders.created_at DESC
    `).all();
    
    orders.forEach((order, index) => {
      console.log(`\n--- Order #${order.id} ---`);
      console.log(`User ID: ${order.user_id}`);
      console.log(`Product: ${order.product_name} (ID: ${order.product_id})`);
      console.log(`Amount: ${order.amount}`);
      console.log(`Payment ID: ${order.payment_id || 'N/A'}`);
      console.log(`Status: ${order.status}`);
      console.log(`Created: ${order.created_at}`);
    });
  }

  // 3. Get addresses
  const addressCount = db.prepare('SELECT COUNT(*) as count FROM addresses').get();
  
  if (addressCount.count === 0) {
    console.log('\n=== ADDRESSES TABLE ===');
    console.log('No addresses found in database');
  } else {
    console.log(`\n=== ADDRESSES TABLE (${addressCount.count} addresses) ===`);
    const addresses = db.prepare(`
      SELECT 
        id,
        user_id,
        address,
        city,
        state,
        pincode,
        phone,
        is_default
      FROM addresses
      ORDER BY created_at DESC
    `).all();
    
    addresses.forEach((addr, index) => {
      console.log(`\n--- Address #${addr.id} ---`);
      console.log(`User ID: ${addr.user_id}`);
      console.log(`Address: ${addr.address}`);
      console.log(`City: ${addr.city}`);
      console.log(`State: ${addr.state}`);
      console.log(`Pincode: ${addr.pincode}`);
      console.log(`Phone: ${addr.phone || 'N/A'}`);
      console.log(`Default: ${addr.is_default ? 'Yes' : 'No'}`);
    });
  }

  // Close the database connection
  db.close();
  console.log('\nDatabase connection closed.');
} catch (err) {
  console.error(`Database error: ${err.message}`);
} 