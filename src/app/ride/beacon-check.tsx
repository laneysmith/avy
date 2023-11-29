import { useState } from "react";
import { Checkbox } from "components/ui/checkbox";
import cn from "classnames";
import { Sun, BatteryFull, Smartphone, Search, Radio } from "lucide-react";
import { CheckedState } from "@radix-ui/react-checkbox";

interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

const iconStyles = "inline-block h-5 w-5 ml-1";

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "display-diagnostics",
    label: "Display/diagnostics",
    description:
      "Turn transceivers on. As they power on, each individual checks that the transceiver runs a self-check and the display is OK.",
    icon: <Sun className={iconStyles} />,
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
      "Ensure that your transceiver will be stored 30 cm (~12”) from a cell phone or radio. Electronics 50 cm away? Airplane mode?",
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

const BeaconCheck = (): JSX.Element => {
  const [checkedIds, setCheckedIds] = useState(new Set());
  const onCheckboxChange2 = (id: string, checked: CheckedState) => {
    if (checked) {
      setCheckedIds((prevState) => new Set([...prevState, id]));
    } else {
      setCheckedIds(
        (prevState) => new Set([...prevState].filter((id) => id !== id))
      );
    }
  };

  return (
    <>
      <ol>
        {CHECKLIST_ITEMS.map(({ id, label, description, icon }) => {
          const isChecked = checkedIds.has(id);
          return (
            <li key={id} className="py-4">
              <label className="items-top flex cursor-pointer space-x-2">
                <Checkbox
                  id={id}
                  checked={isChecked}
                  onCheckedChange={(checked) => onCheckboxChange2(id, checked)}
                />
                <div className="grid gap-1.5 leading-none">
                  <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {label} {icon}
                  </span>
                  <p
                    className={cn("text-sm text-muted-foreground", {
                      "line-through": isChecked,
                    })}
                  >
                    {description}
                  </p>
                </div>
              </label>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default BeaconCheck;
