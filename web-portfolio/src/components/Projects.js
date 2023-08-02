import React, { useEffect, useState } from 'react';
import './projectsStyles.css';

function Projects() {
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    const letters = document.querySelectorAll('.bouncy');

    const toggleRubberBand = (e) => {
      e.target.classList.add('bouncing');
      e.target.addEventListener('animationend', () => {
        e.target.classList.remove('bouncing');
      });
    };

    letters.forEach((letter) => {
      letter.addEventListener('mouseenter', toggleRubberBand);
    });

    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener('mouseenter', toggleRubberBand);
      });
    };
  }, []);

  const cards = [
    {
      id: 1,
      category: ['All', 'Java'],
      imageUrl:
        'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80',
      title: 'Cozy apartment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.',
      githubLink: 'https://github.com/example-repo-1',
    },
    {
      id: 2,
      category: ['All', 'React'],
      imageUrl:
        'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80',
      title: 'Modern flat',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas fuga odio vel veniam eveniet, explicabo autem earum?',
      githubLink: 'https://github.com/example-repo-2',
    },
    {
      id: 3,
      category: ['All', 'JavaScript'],
      imageUrl:
        'https://images.unsplash.com/photo-1529595354331-201ad3ae5e71?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6114533e2d0c1c81534fe13611dbfd76&auto=format&fit=crop&w=658&q=80',
      title: 'Luxury property',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa libero totam nostrum consequatur autem quae provident quos alias fugit maxime nisi labore, temporibus tempore illo natus voluptates aliquam ipsum officia quasi placeat aut facilis laudantium nam! Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt, repudiandae aspernatur explicabo numquam! Tenetur!',
      githubLink: 'https://github.com/example-repo-3',
    },
    {
      id: 4,
      category: ['All', 'Python'],
      imageUrl:
        'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80',
      title: 'Amazing Python Project',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis turpis luctus, volutpat mi id, elementum ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vitae enim et ligula maximus malesuada. In vulputate eget magna non fermentum. Sed quis felis est.',
      githubLink: 'https://github.com/example-repo-4',
    },
    {
      id: 5,
      category: ['All', 'Python'],
      imageUrl:
        'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80',
      title: 'Python Web App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Suspendisse vitae bibendum elit. Donec ac sapien elit. Aenean egestas neque at urna hendrerit cursus. Nunc non lorem venenatis, consequat eros quis, laoreet eros. Fusce tempor, quam at scelerisque placerat, quam nunc blandit dui, nec dictum quam elit eu tellus.',
      githubLink: 'https://github.com/example-repo-5',
    },
    {
      id: 6,
      category: ['All', 'React'],
      imageUrl:
        'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c02fb96f9cfc16d3649835b75d1b2033&auto=format&fit=crop&w=1350&q=80',
      title: 'React Components Library',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor odio eu scelerisque pharetra. Praesent eget tortor nec magna ultricies varius sit amet nec felis. Ut non varius dolor. Proin pellentesque mauris vitae erat lobortis dignissim.',
      githubLink: 'https://github.com/example-repo-6',
    },
  ];

  const filteredCards =
    filterCategory === 'All'
      ? cards
      : cards.filter((card) => card.category.includes(filterCategory));

  /*
  https://codepen.io/kparzecki/pen/RYzZwG 
  This link is for the cards of my projects I have done.
  */
  return (
    <>
      <div className="bouncy-container">
        <h1 className="bouncy">
          P
        </h1>
        <h1 className="bouncy">
          r
        </h1>
        <h1 className="bouncy">
          o
        </h1>
        <h1 className="bouncy">
          j
        </h1>
        <h1 className="bouncy">
          e
        </h1>
        <h1 className="bouncy">
          c
        </h1>
        <h1 className="bouncy">
          t
        </h1>
        <h1 className="bouncy">
          s
        </h1>
      </div>

    

      <div>
        <button onClick={() => setFilterCategory('All')}>All</button>
        <button onClick={() => setFilterCategory('Java')}>Java</button>
        <button onClick={() => setFilterCategory('React')}>React</button>
        <button onClick={() => setFilterCategory('JavaScript')}>JavaScript</button>
        <button onClick={() => setFilterCategory('Python')}>Python</button>
        {/* Add more buttons for other categories if needed */}
      </div>

      <div className="wrapper">
        {filteredCards.map((card) => (
          <div className="card-projects" key={card.id}>
            <input type="checkbox" id={`card${card.id}`} className="more" aria-hidden="true" />
            <div className="content">
              <div className="front" style={{ backgroundImage: `url('${card.imageUrl}')` }}>
                <div className="inner">
                  <h2>{card.title}</h2>
                  <label htmlFor={`card${card.id}`} className="button" aria-hidden="true">
                    Details
                  </label>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <div className="description">
                    <p>{card.description} <a href={card.githubLink} target="_blank" rel="noopener noreferrer">read more</a></p>
                  </div>
                  <div className="card-footer">
  <label htmlFor={`card${card.id}`} className="button-return" aria-hidden="true">
    <i className="fas fa-arrow-left"></i>
  </label>
</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
