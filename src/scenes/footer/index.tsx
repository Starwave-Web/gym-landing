import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            At EvoGym, we’re dedicated to helping you achieve your fitness goals
            with cutting-edge equipment, expert trainers, and a welcoming
            environment. Whether you’re just starting or pushing your limits, we
            provide the support and motivation to evolve your fitness journey.
            Join us today!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Privacy Policy</p>
          <p className="my-5">Terms & Conditions</p>
          <p>Cookie Policy</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Phone contact number</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
