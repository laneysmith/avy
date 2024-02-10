const listStyles = "mt-2 mb-4 ml-6 list-disc";
const checklistHeadingStyles = "mt-4";

const AnticipateTheHazard = (): JSX.Element => {
  return (
    <>
      <h4 className={checklistHeadingStyles}>Colorado</h4>
      <ul className={listStyles}>
        <li>
          <a
            href="https://avalanche.state.co.us"
            target="_blank"
            rel="noreferrer"
          >
            Colorado Avalanche Information Center
          </a>
        </li>
      </ul>
      <h4 className={checklistHeadingStyles}>Washington</h4>
      <ul className={listStyles}>
        <li>
          <a
            href="https://nwac.us/avalanche-forecast/#/all/"
            target="_blank"
            rel="noreferrer"
          >
            Northwest Avalanche Center
          </a>
        </li>
      </ul>
    </>
  );
};

export default AnticipateTheHazard;
