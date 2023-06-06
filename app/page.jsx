import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full  flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        <br />    
        Welcome to Promptopia, your gateway to endless inspiration and limitless
        creativity! With our cutting-edge AI technology, we bring you a unique
        and exhilarating experience that will ignite your imagination and
        unleash the full potential of your writing prowess.
      </p>
      <Feed/>
    </section>
    
  );
};

export default Home;
