import React from 'react';

const Portfolio = ({ darkMode }) => {
    const portfolioClassName = darkMode ? "bg-slate-600 py-16 text-white" : "bg-gray-100 py-16 text-black";
  


  const projects = [
    {
      title: 'clever-chat',
      description: 'A deprecated chatbot package based on a heavy modified brainshop.ai network.',
      image: '/image/portfolio/clever-chat.png',
      //demoLink: '',
      codeLink: 'https://github.com/hisRoyalty/clever-chat',
    },
    {
      title: 'Disvas',
      description: 'Advanced image generation using node-canvas. Aimed for Discord.',
      image: '/image/portfolio/disvas.png',
      //demoLink: '',
      codeLink: 'https://github.com/hisRoyalty/disvas',
    },
    {
        title: 'ProGIF',
        description: 'Advanced GIF generation like never before. Work in progress.',
        image: '/image/portfolio/progif.png',
        demoLink: '',
        codeLink: 'https://github.com/hisRoyalty/progif',
      },
  ];

  return (
    <section className={portfolioClassName}>
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-8">Portfolio</h2>
        <h1 className="text-center mb-8">Here are some projects that I have worked on.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-8 mr-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="h-30 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;