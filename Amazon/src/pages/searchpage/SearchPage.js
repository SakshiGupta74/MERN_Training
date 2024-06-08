import React from 'react';

const SearchPage = () => {
    return (
        <div>
            <header>
                <h1>Amazon</h1>
                <input type="text" placeholder="Search for products..." />
                <button>Search</button>
            </header>
            <main>
                <h2>Search Results</h2>
                <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                    <li>Product 4</li>
                    <li>Product 5</li>
                </ul>
            </main>
            <footer>
                <p>© 2024 Amazon</p>
            </footer>
        </div>
    );
}

export default SearchPage;
