# Luminosa - Skincare E-commerce Website

A professional e-commerce platform for selling premium skincare products. This project is built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all device sizes
- Product listing with detailed descriptions
- Product detail pages
- Checkout flow with customer information collection
- Simulated Razorpay payment integration
- Order confirmation

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository or download the files

2. Navigate to the project directory
```bash
cd luminosa-store
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/` - Contains the main application pages and layout
- `src/components/` - Reusable React components
- `src/data/` - Product data
- `src/types/` - TypeScript interfaces and type definitions
- `src/lib/` - Utility functions and database code

## Database

The application uses SQLite through the better-sqlite3 package. The database schema includes:

- Products table: Stores product information
- Orders table: Tracks customer orders
- Addresses table: Stores shipping addresses for orders

### Viewing Database Data

Several scripts have been created to help view the SQLite database contents:

1. **General Database Overview**
   ```bash
   node view-db.js
   ```
   Shows all tables, their row counts, and the structure of main tables.

2. **View Products**
   ```bash
   node view-products.js
   ```
   Shows detailed information about all products in the database.

3. **View Orders**
   ```bash
   node view-orders.js
   ```
   Shows information about orders and shipping addresses.

4. **View Users**
   ```bash
   node view-users.js
   ```
   Shows basic information about registered users.

## Payment Integration

The application includes a simulated Razorpay payment integration. In a production environment, you would need to:

1. Create a Razorpay account and obtain API keys
2. Implement server-side code to create orders and verify payments
3. Replace the simulation code with actual Razorpay integration

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [SQLite](https://www.sqlite.org/) - Database
- [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3) - SQLite client for Node.js

## Deployment

This application can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/luminosa-store)

## License

This project is licensed under the MIT License.
