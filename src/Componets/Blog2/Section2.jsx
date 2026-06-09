import React from "react";
import "./Section2.css";
import img50 from "../../assets/img50.jpg";
import img51 from "../../assets/img51.jpg";
import img52 from "../../assets/img2.jpg";
import img53 from "../../assets/img3.jpg";
import img55 from "../../assets/img55.jpg"

const relatedPosts = [
  { id: 1, img: img52, date: "January 3, 2023", title: "How to prepare a delicious gluten free sushi" },
  { id: 2, img: img53, date: "January 3, 2023", title: "Exclusive baking lessons from the pastry king" },
  { id: 3, img: img51, date: "January 3, 2023", title: "How to prepare the perfect fries in an air fryer" },
  { id: 5, img: img55, date: "January 3, 2023", title: "The ultimate guide to making the best pizza dough" },
];

const Section2 = () => {
  return (
    <div className="s2-wrapper">

      {/* ===== HERO ===== */}
      <div className="s2-hero fade-in">
        <h1 className="s2-hero__title">
          The secret tips &amp; tricks to prepare a perfect burger &amp; pizza for our customers
        </h1>
        <div className="s2-hero__img">
          <img src={img50} alt="Hero food" />
        </div>
      </div>

      {/* ===== ARTICLE BODY ===== */}
      <div className="s2-article fade-in delay-1">

        <h2 className="s2-article__heading">What do you need to prepare a home-made burger?</h2>
        <p className="s2-article__text">
          Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion
          to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets
          and insider tips for mastering these beloved staples of the culinary world.
        </p>

        <ol className="s2-article__list">
          <li><strong>Quality Beef:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
          <li><strong>Seasoning:</strong> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
          <li><strong>Don't Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
          <li><strong>Cooking:</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
          <li><strong>Resting:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
        </ol>

        {/* Content image */}
        <div className="s2-article__img fade-in delay-2">
          <img src={img51} alt="Ingredients" />
        </div>

        <h2 className="s2-article__heading">What are the right ingredients to make it delicious?</h2>
        <p className="s2-article__text">
          Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion
          to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets
          and insider tips for mastering these beloved staples of the culinary world.
        </p>

        <ol className="s2-article__list">
          <li><strong>Quality Beef:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
          <li><strong>Seasoning:</strong> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
          <li><strong>Don't Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
          <li><strong>Cooking:</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
          <li><strong>Resting:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
        </ol>

        <p className="s2-article__text">
          Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi
          in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu
          enim urna adipiscing praesent velit viverra sit semper lorem eu cursus.
        </p>
      </div>

      {/* ===== READ MORE SECTION ===== */}
      <div className="s2-more">
        <div className="s2-more__header fade-in">
          <h2 className="s2-more__title">Read More Articles</h2>
          <p className="s2-more__subtitle">
            We consider all the drivers of change gives you the components you need
            to change to create a truly happens.
          </p>
        </div>

        <div className="s2-more__grid">
          {relatedPosts.map((post, index) => (
            <div
              className="s2-more__card fade-in"
              key={post.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="s2-more__card-img">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="s2-more__card-body">
                <span className="s2-more__card-date">{post.date}</span>
                <h3 className="s2-more__card-title">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Section2;