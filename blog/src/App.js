import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Accueil from './pages/Accueil';
import Article from './pages/Article';
import EditArticle from './pages/EditArticle';

function App() {
  const [articles, setArticles] = useState([
    { id: 1, titre: 'Premier article', contenu: 'Contenu du premier article.' },
    { id: 2, titre: 'Deuxième article', contenu: 'Contenu du deuxième article.' }
  ]);

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Mon Blog</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil articles={articles} />} />
          <Route path="/article/:id" element={<Article articles={articles} />} />
          <Route path="/article/:id/edit" element={<EditArticle articles={articles} setArticles={setArticles} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
