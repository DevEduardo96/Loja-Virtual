/*
  # Add sample products

  1. Changes
    - Insert initial product data with various categories and stock levels
    - All products have realistic prices and descriptions
    - Images are from Unsplash (stable URLs)

  2. Data
    - Electronics (laptops, phones, accessories)
    - Fashion (clothing, bags)
    - Home & Living (decor, furniture)
*/

INSERT INTO products (name, price, image, description, category, stock) VALUES
  (
    'Premium Wireless Headphones',
    299.99,
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1600',
    'High-end wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.',
    'Electronics',
    50
  ),
  (
    'Ultra-Slim Laptop Pro',
    1299.99,
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1600',
    'Powerful laptop featuring a 15-inch 4K display, 16GB RAM, and the latest processor for ultimate performance.',
    'Electronics',
    25
  ),
  (
    'Leather Weekend Bag',
    199.99,
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1600',
    'Handcrafted genuine leather weekend bag with premium metal hardware and multiple compartments.',
    'Fashion',
    30
  ),
  (
    'Smart Watch Elite',
    399.99,
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1600',
    'Advanced smartwatch with health tracking, GPS, and a beautiful always-on display.',
    'Electronics',
    40
  ),
  (
    'Modern Minimalist Desk',
    449.99,
    'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1600',
    'Sleek wooden desk with cable management and minimalist design, perfect for home office.',
    'Home & Living',
    15
  ),
  (
    'Premium Wireless Earbuds',
    159.99,
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1600',
    'True wireless earbuds with premium sound quality, active noise cancellation, and wireless charging case.',
    'Electronics',
    75
  ),
  (
    'Designer Tote Bag',
    129.99,
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1600',
    'Stylish and spacious tote bag made from premium materials, perfect for daily use.',
    'Fashion',
    45
  ),
  (
    'Minimalist Wall Clock',
    79.99,
    'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=1600',
    'Modern wall clock with silent movement and minimalist design, suitable for any room.',
    'Home & Living',
    60
  );