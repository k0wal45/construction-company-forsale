const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex w-full flex-col items-center justify-around gap-8 p-4 lg:flex-row text-center bg-gray-700 text-white">
      <p className="flex gap-1">
        Copyright © <div className="text-primary">{year}</div> - All right
        reserved
      </p>
      <p>
        Created by:{" "}
        <a href="https://lunarisweb.pl/" className="underline">
          Lunaris Web
        </a>
      </p>
    </footer>
  );
};

export default Footer;
