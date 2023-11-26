import { ReactNode } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import cn from "classnames";
import BeaconCheck from "./ride/beacon-check";
import Todo from "./todo";
import styles from "./tab-nav.module.css";

enum Section {
  Plan = "Plan",
  Ride = "Ride",
  Debrief = "Debrief",
}

interface SubSection {
  title: string;
  component: ReactNode;
}

const sections: Record<Section, SubSection[]> = {
  [Section.Plan]: [
    {
      title: "Assemble Your Group",
      component: <Todo />,
    },
    {
      title: "Anticipate The Hazard..",
      component: <Todo />,
    },
    {
      title: "Plan to Manage Avalanche Terrain",
      component: <Todo />,
    },
    {
      title: "Discuss an Emergency Plan.",
      component: <Todo />,
    },
  ],
  [Section.Ride]: [
    {
      title: "Conduct a Departure Check",
      component: <Todo />,
    },
    {
      title: "D.B.E.S.T. Beacon Check",
      component: <BeaconCheck />,
    },
    {
      title: "Monitor Conditions Along Your Route",
      component: <Todo />,
    },
    {
      title: "Check In With The Group",
      component: <Todo />,
    },
    {
      title: "Recognize Avalanche Terrain",
      component: <Todo />,
    },
    {
      title: "Use Terrain To Reduce Your Risk",
      component: <Todo />,
    },
  ],
  [Section.Debrief]: [
    {
      title: "Summarize Conditions",
      component: <Todo />,
    },
    {
      title: "Review Today’s Decisions",
      component: <Todo />,
    },
    {
      title: "Improve Today’s Plans",
      component: <Todo />,
    },
  ],
};

const TabNav = (): JSX.Element => {
  return (
    <div className="w-full sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(sections).map((key) => {
            return (
              <Tab
                key={key}
                className={({ selected }) =>
                  cn(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    {
                      "bg-white text-blue-700 shadow": selected,
                      "text-blue-100 hover:bg-white/[0.12] hover:text-white":
                        !selected,
                    }
                  )
                }
              >
                {key}
              </Tab>
            );
          })}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {Object.entries(sections).map(([key, value]) => (
            <Tab.Panel key={`${key}-panel`} className={styles.tabPanel}>
              {value.map((item) => (
                <Disclosure key={`${key}-panel-dsi`}>
                  {({ open }) => (
                    <div key={item.title}>
                      <Disclosure.Button className={styles.disclosureButton}>
                        <span>{item.title}</span>
                        <ChevronUpIcon
                          className={cn("h-6 w-6 text-white", {
                            "rotate-180 transform": open,
                          })}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel>{item.component}</Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabNav;
