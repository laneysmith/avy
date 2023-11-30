import {
  BatteryFull,
  Smartphone,
  Search,
  Radio,
  PocketKnife,
  Cross,
  LifeBuoy,
  Map,
  Shovel,
  Backpack,
  Power,
} from "lucide-react";
import { Checklist } from "components/ui/checklist";

const iconStyles = "inline-block h-5 w-5 ml-1";
const checklistHeadingStyles = "mt-4";
const checklistStyles = "p-4 pr-0";

const GROUP_GEAR_CHECK_ITEMS = [
  {
    id: "repair-kit",
    label: "Repair kit",
    icon: <PocketKnife className={iconStyles} />,
  },
  {
    id: "first-aid-kit",
    label: "First aid kit",
    icon: <Cross className={iconStyles} />,
  },
  {
    id: "rescue-sled",
    label: "Rescue sled",
    icon: <LifeBuoy className={iconStyles} />,
  },
  {
    id: "communication-devices",
    label: "Communication device(s)",
    icon: <Smartphone className={iconStyles} />,
  },
  {
    id: "navigation-tools",
    label: "Navigation tools",
    icon: <Map className={iconStyles} />,
  },
];

const INDIVIDUAL_GEAR_CHECK_ITEMS = [
  {
    id: "transceiver",
    label: "Tranceiver",
    icon: <Radio className={iconStyles} />,
  },
  {
    id: "shovel",
    label: "Shovel",
    icon: <Shovel className={iconStyles} />,
  },
  {
    id: "probe",
    label: "Probe",
    icon: <Backpack className={iconStyles} />,
  },
];

const BEACON_CHECK_ITEMS = [
  {
    id: "display-diagnostics",
    label: "Display/diagnostics",
    description:
      "Turn transceivers on. As they power on, each individual checks that the transceiver runs a self-check and the display is OK.",
    icon: <Power className={iconStyles} />,
  },
  {
    id: "battery",
    label: "Battery level",
    description:
      "They also note the battery strength and report it aloud to the group.",
    icon: <BatteryFull className={iconStyles} />,
  },
  {
    id: "electronics",
    label: "Electronics",
    description:
      "Ensure that your transceiver will be stored 30 cm (~12”) from a cell phone or radio.",
    icon: <Smartphone className={iconStyles} />,
  },
  {
    id: "search",
    label: "Search",
    description:
      "Switch all transceivers to Search mode. Silence indicates that everyone is ready and ensures that no transmitting units are on dogs, sleds, or in packs. The leader then switches to Transmit/Send and checks that each group member can receive a signal by walking towards each individual, while the individual reads their display out loud.",
    icon: <Search className={iconStyles} />,
  },
  {
    id: "transmit",
    label: "Transmit & stow",
    description:
      "Turn all units to Transmit/Send. The check-leader witnesses that each group members stows their unit for the day, secured under an outside layer and 30 cm (~12”) from a cell phone or radio. The leader returns to Search mode and confirms all group members are transmitting. The leader then switches to Transmit/Send mode. One group member then verifies that the leader’s device is stored under an outside layer and 30 cm (~12”) from a cell phone or radio for the day.",
    icon: <Radio className={iconStyles} />,
  },
];

const DepartureCheck = (): JSX.Element => {
  return (
    <>
      <p className="mb-4">
        Before entering the trailhead or boundary gate, everyone in the group
        must participate in a departure check. Designate one person to lead the
        check.
      </p>

      <h4 className={checklistHeadingStyles}>
        Confirm that <u>the group</u> has the following items
      </h4>
      <Checklist items={GROUP_GEAR_CHECK_ITEMS} className={checklistStyles} />

      <h4 className={checklistHeadingStyles}>
        Confirm that <u>each individual</u> has the following items
      </h4>
      <Checklist
        items={INDIVIDUAL_GEAR_CHECK_ITEMS}
        className={checklistStyles}
      />

      <h4 className={checklistHeadingStyles}>
        Perform a beacon check using the <u>D.B.E.S.T.</u> method
      </h4>
      <Checklist items={BEACON_CHECK_ITEMS} className={checklistStyles} />
    </>
  );
};

export default DepartureCheck;
