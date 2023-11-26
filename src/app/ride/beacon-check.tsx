import { useState } from "react";
import {
  Battery100Icon,
  PowerIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import styles from "../app.module.css";

interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

const iconStyles = "inline-block h-5 w-5 ml-2 text-ice-blue";

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "display-diagnostics",
    label: "Display/diagnostics",
    description:
      "Turn transceivers on. As they power on, each individual checks that the transceiver runs a self-check and the display is OK.",
    icon: <PowerIcon className={iconStyles} />,
  },
  {
    id: "battery",
    label: "Battery level",
    description:
      "They also note the battery strength and report it aloud to the group.",
    icon: <Battery100Icon className={iconStyles} />,
  },
  {
    id: "electronics",
    label: "Electronics",
    description:
      "Ensure that your transceiver will be stored 30 cm (~12”) from a cell phone or radio. Electronics 50 cm away? Airplane mode?",
    icon: <DevicePhoneMobileIcon className={iconStyles} />,
  },
  {
    id: "search",
    label: "Search",
    description:
      "Switch all transceivers to Search mode. Silence indicates that everyone is ready and ensures that no transmitting units are on dogs, sleds, or in packs. The leader then switches to Transmit/Send and checks that each group member can receive a signal by walking towards each individual, while the individual reads their display out loud.",
    icon: <MagnifyingGlassIcon className={iconStyles} />,
  },
  {
    id: "transmit",
    label: "Transmit & stow",
    description:
      "Turn all units to Transmit/Send. The check-leader witnesses that each group members stows their unit for the day, secured under an outside layer and 30 cm (~12”) from a cell phone or radio. The leader returns to Search mode and confirms all group members are transmitting. The leader then switches to Transmit/Send mode. One group member then verifies that the leader’s device is stored under an outside layer and 30 cm (~12”) from a cell phone or radio for the day.",
    icon: <SignalIcon className={iconStyles} />,
  },
];

const BeaconCheck = (): JSX.Element => {
  const [checkedIds, setCheckedIds] = useState(new Set());
  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedIds((prevState) => new Set([...prevState, event.target.id]));
    } else {
      setCheckedIds(
        (prevState) =>
          new Set([...prevState].filter((id) => id !== event.target.id))
      );
    }
  };

  return (
    <>
      {/* <h1 className="inline-block bg-gradient-to-r from-indigo-600 to-ice-blue box-decoration-clone px-2  text-white">
        Beacon Check
      </h1> */}
      {/* <h2>D.B.E.S.T</h2> */}

      {/* <div className="grid w-full grid-cols-3 grid-rows-2">
        <div className="col-span-1">icon</div>
        <div className="col-span-1">label</div>
        <div className="col-span-1">desc</div>
        <div className="col-span-1 row-span-2">checkbox</div>
      </div> */}

      {/* <Button>Continue</Button> */}

      <ol className={styles.checklist}>
        {CHECKLIST_ITEMS.map(({ id, label, description, icon }) => {
          const isChecked = checkedIds.has(id);
          return (
            <li key={id} className={styles.checklistItem}>
              <label htmlFor={id} className={styles.checkboxLabel}>
                <div>
                  <h3 className="flex items-center">
                    {label} {icon}
                  </h3>
                  <div
                    className={`${styles.checkboxDescription} ${
                      isChecked ? "line-through" : ""
                    }`}
                  >
                    {description}
                  </div>
                </div>
                <input
                  id={id}
                  name={id}
                  type="checkbox"
                  checked={isChecked}
                  onChange={onCheckboxChange}
                  className={styles.checkbox}
                  // disabled={checkedCount <= index}
                />
              </label>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default BeaconCheck;
