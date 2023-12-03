const listStyles = "mt-2 mb-4 ml-6 list-disc";

const CheckIn = (): JSX.Element => {
  return (
    <>
      Include everyone and ask:
      <ul className={listStyles}>
        <li>Who saw what?</li>
        <li>What do your observations mean?</li>
        <li>Are the conditions what you expected?</li>
        <li>Did you see anything unexpected or unusual? </li>
      </ul>
      Ask yourselves:
      <ul className={listStyles}>
        <li>Are we on track?</li>
        <li>Do we need to reevaluate our time plan and/or trip plan?</li>
      </ul>
      The options to manage unfamiliarity and uncertainty are always the same:
      <ul className={listStyles}>
        <li>Shorten the trip</li>
        <li>Abort the trip</li>
        <li>Choose simpler, less exposed terrain</li>
      </ul>
    </>
  );
};

export default CheckIn;
