import headerStyles from "../styles/Header.module.css";

const Header = () => {
  // const x = 2;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Server Side</span> Rendering
      </h1>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "green" : "red"};
          }
        `}
      </style> */}
      <p className={headerStyles.description}>
        Keep up to date with the latest server side rendering news.
      </p>
    </div>
  );
};

export default Header;
