import profile from "../assets/img/DSC.jpg";

const Home = () => {
  return (
    <div className='container'>
      <div className='row justify-content-between align-items-center'>
        <div className='col-12 col-md-6'>
          <img className='w-75' src={profile} alt='profile' />
        </div>
        <h4 className='desc text-start col-12 col-md-6'>
          Hello, I am Mohamed Imam. Recently graduated from the Arab Academy for
          Science, Technology & Maritime Transport with a bachelor’s degree in
          Computer Science. As a capable young professional, I have exceptional
          passion for Software Development with a particular skill-set in
          Front-end development. Seeking an opportunity to expand skills and
          contribute to project success. Moreover, I am experienced in working
          within challenging environments and aspiring to take my career to the
          next level.
        </h4>
      </div>
    </div>
  );
};

export default Home;
