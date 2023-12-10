const listStyles = "mt-2 mb-4 ml-6 list-disc";
const checklistHeadingStyles = "mt-4";

const AssembleYourGroup = (): JSX.Element => {
  return (
    <>
      <h4>Group check in</h4>
      <p className="mt-2">
        Record names, contact information, and emergency numbers
      </p>

      <h4 className={checklistHeadingStyles}>Discuss</h4>
      <p>
        <ul className={listStyles}>
          <li>compatibility of goals</li>
          <li>compatibility of skills, abilities, and equipment</li>
          <li>group size (optimal is 3-5)</li>
          <li>compatibility of risk tolerance</li>
          <li>any health issues</li>
          <li>if all agree to travel and decide together</li>
        </ul>
      </p>
    </>
  );
};

export default AssembleYourGroup;
