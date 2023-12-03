import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import { Section, SECTIONS_MAP } from "app/sections";

const TabNav = (): JSX.Element => {
  return (
    <div className="w-full sm:px-0">
      <Tabs defaultValue={Section.Plan} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {Object.keys(SECTIONS_MAP).map((section) => (
            <TabsTrigger key={section} value={section}>
              {section}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(SECTIONS_MAP).map(([section, contents]) => (
          <TabsContent key={`${section}-panel`} value={section}>
            <Card>
              <CardHeader>
                <CardTitle>{section}</CardTitle>
              </CardHeader>
              {contents.map(({ title, description, component }) => (
                <CardContent key={title}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div>{title}</div>
                        {description && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            {description}
                          </div>
                        )}
                      </AccordionTrigger>
                      <AccordionContent>{component}</AccordionContent>
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
