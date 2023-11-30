import { useCallback, useState } from "react";
import cn from "classnames";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "components/ui/checkbox";

interface ChecklistItemInfo {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface ChecklistProps {
  items: ChecklistItemInfo[];
  className?: string;
}

const Checklist = ({ items, className }: ChecklistProps): JSX.Element => {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
  const onToggleChecked = (id: string, checked: CheckedState) => {
    if (checked) {
      setCheckedIds((prevState) => new Set([...prevState, id]));
    } else {
      setCheckedIds(
        (prevState) =>
          new Set([...prevState].filter((checkedId) => checkedId !== id))
      );
    }
  };

  return (
    <ol className={className}>
      {items.map((item) => {
        return (
          <li key={item.id} className="py-3">
            <ChecklistItem
              item={item}
              checkedIds={checkedIds}
              onToggleChecked={onToggleChecked}
            />
          </li>
        );
      })}
    </ol>
  );
};

interface ChecklistItemProps {
  item: ChecklistItemInfo;
  checkedIds: Set<string>;
  onToggleChecked: (id: string, checked: CheckedState) => void;
}

const ChecklistItem = ({
  item,
  checkedIds,
  onToggleChecked,
}: ChecklistItemProps): JSX.Element => {
  const { id, label, description, icon } = item;
  const isChecked = checkedIds.has(id);
  const onCheckboxChange = useCallback(
    (checked: CheckedState) => {
      onToggleChecked(id, checked);
    },
    [id, onToggleChecked]
  );

  return (
    <label className="items-top flex cursor-pointer space-x-2">
      <Checkbox
        id={id}
        checked={isChecked}
        onCheckedChange={onCheckboxChange}
      />
      <div className="grid gap-1.5 leading-none">
        <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label} {icon}
        </span>
        {description && (
          <p
            className={cn("text-sm text-muted-foreground", {
              "line-through": isChecked,
            })}
          >
            {description}
          </p>
        )}
      </div>
    </label>
  );
};

export { Checklist, ChecklistItem };
export type { ChecklistItemInfo };
