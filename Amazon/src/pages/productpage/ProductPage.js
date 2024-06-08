import React from 'react';

const ProductPage = () => {
    return (
        <div>
            <header>
                <h1>Amazon</h1>
                <input type="text" placeholder="Search for products..." />
                <button>Search</button>
            </header>
            <main>
                <h2>Product Details</h2>
                <div>
                    <h3>Product Name</h3>
                    <p>Product Description</p>
                    <p>Price: $XX.XX</p>
                    <button>Add to Cart</button>
                </div>
            </main>
            <footer>
                <p>© 2024 Amazon</p>
            </footer>
        </div>
    );
}

export default ProductPage;

