import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Amazon</h1>
                <input type="text" placeholder="Search for products..." />
                <button>Search</button>
            </header>
            <main>
                <h2>Welcome to Amazon</h2>
                <p>Shop the best products from various categories.</p>
            </main>
            <footer>
                <p>© 2024 Amazon</p>
            </footer>
        </div>
    );
}

export default HomePage;
