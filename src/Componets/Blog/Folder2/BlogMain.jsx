import './BlogMain.css';

const tips = [
  {
    bold: "Quality Beef:",
    text: "The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.",
  },
  {
    bold: "Seasoning:",
    text: "Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.",
  },
  {
    bold: "Don't Overwork the Meat:",
    text: "When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.",
  },
  {
    bold: "Cooking:",
    text: "High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.",
  },
  {
    bold: "Resting:",
    text: "Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.",
  },
];

const articles = [
  {
    img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80",
    date: "January 3, 2023",
    title: "How to prepare a delicious gluten free sushi",
  },
  {
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
    date: "January 3, 2023",
    title: "Exclusive baking lessons from the pastry king",
  },
  {
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
    date: "January 3, 2023",
    title: "How to prepare the perfect fries in an air fryer",
  },
  {
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80",
    date: "January 3, 2023",
    title: "How to prepare delicious chicken tenders",
  },
];

const BlogMain = () => {
  return (
    <main className="blog-main">

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          The secret tips &amp; tricks to prepare a perfect burger &amp; pizza for our customers
        </h1>
        <div className="hero-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=85"
            alt="Delicious food bowl"
            className="hero-img"
          />
        </div>
      </section>

      {/* Article Body */}
      <section className="article-body">
        <div className="article-content">

          <div className="content-block">
            <h2 className="section-heading">What do you need to prepare a home-made burger?</h2>
            <p className="body-text">
              Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft
              dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips
              for mastering these beloved staples of the culinary world.
            </p>
          </div>

          <ol className="tips-list">
            {tips.map((tip, i) => (
              <li key={i} className="tip-item">
                <span className="tip-bold">{tip.bold}</span> {tip.text}
              </li>
            ))}
          </ol>

          {/* Second image */}
          <div className="mid-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=85"
              alt="Crispy fries"
              className="mid-img"
            />
          </div>

          <div className="content-block">
            <h2 className="section-heading">What are the right ingredients to make it delicious?</h2>
            <p className="body-text">
              Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in
              consequat. Fusce sodales augue a accumsa Cras sollicitudin. Ie ligula, porttitor eu, consequat vitae,
              eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna
              adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi
              curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet
              purus gravida quis blandit turpis.
            </p>
          </div>

          <ol className="tips-list">
            {tips.map((tip, i) => (
              <li key={i} className="tip-item">
                <span className="tip-bold">{tip.bold}</span> {tip.text}
              </li>
            ))}
          </ol>

        </div>
      </section>

      {/* Read More Articles */}
      <section className="articles-section">
        <h2 className="articles-title">Read More Articles</h2>
        <p className="articles-sub">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
        <div className="articles-grid">
          {articles.map((a, i) => (
            <div key={i} className="article-card">
              <div className="card-img-wrap">
                <img src={a.img} alt={a.title} className="card-img" />
              </div>
              <div className="card-body">
                <span className="card-date">{a.date}</span>
                <h3 className="card-title">{a.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default BlogMain;