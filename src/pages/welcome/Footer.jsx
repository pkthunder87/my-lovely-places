function Footer({
  height = 'h-0 sm:h-0',
  textSize = 'text-base',
  textColor = 'text-pale-blue',
  position = 'mt-36 text-right mr-4',
}) {
  return (
    <footer
      className={` ${height} ${textSize}  w-full bg-pale-blue text-base ${textColor} flex items-center justify-end  sm:text-2xl`}
    >
      <p className={` ${position}`}>
        &copy; 2023 by{' '}
        <a
          href="https://github.com/pkthunder87/my-lovely-places"
          target="_blank"
          rel="noreferrer"
        >
          PKThunder87
        </a>
      </p>
    </footer>
  );
}

export default Footer;
