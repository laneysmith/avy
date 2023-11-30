import { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";

import Todo from "./todo";
import DepartureCheck from "./ride/01-departure-check";
import { Monitor } from "lucide-react";

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
      component: <DepartureCheck />,
    },
    {
      title: "Monitor Conditions Along Your Route",
      component: <Monitor />,
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
      <Tabs defaultValue={Section.Plan} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {Object.keys(sections).map((key) => (
            <TabsTrigger key={key} value={key}>
              {key}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(sections).map(([key, value]) => (
          <TabsContent key={`${key}-panel`} value={key}>
            <Card>
              <CardHeader>
                <CardTitle>{key}</CardTitle>
              </CardHeader>
              {value.map((item) => (
                <CardContent key={item.title}>
                  <Accordion
                    key={`${key}-${item.title}-panel`}
                    type="single"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>{item.component}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              ))}
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabNav;
