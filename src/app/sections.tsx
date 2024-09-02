import Todo from "app/todo";

import AssembleYourGroup from "app/01-plan/01-assemble-your-group";
import AnticipateTheHazard from "app/01-plan/02-anticipate-the-hazard";
import PlanToManageAvalancheTerrain from "app/01-plan/03-plan-to-manage-avalanche-terrain";
import DiscussAnEmergencyPlan from "app/01-plan/04-discuss-an-emergency-plan";

import DepartureCheck from "app/02-ride/01-departure-check";
import MonitorConditions from "app/02-ride/02-monitor-conditions";
import CheckIn from "app/02-ride/03-check-in";
import RecognizeAvalancheTerrain from "app/02-ride/04-recognize-avalanche-terrain";

export enum Section {
  Plan = "Plan",
  Ride = "Ride",
  Debrief = "Debrief",
}

interface SubSection {
  title: string;
  description?: string;
  component: React.ReactNode;
}

export const SECTIONS_MAP: Record<Section, SubSection[]> = {
  [Section.Plan]: [
    {
      title: "Assemble Your Group",
      component: <AssembleYourGroup />,
    },
    {
      title: "Anticipate The Hazard",
      component: <AnticipateTheHazard />,
    },
    {
      title: "Plan to Manage Avalanche Terrain",
      component: <PlanToManageAvalancheTerrain />,
    },
    {
      title: "Discuss an Emergency Plan",
      component: <DiscussAnEmergencyPlan />,
    },
  ],
  [Section.Ride]: [
    {
      title: "Conduct a Departure Check",
      component: <DepartureCheck />,
    },
    {
      title: "Monitor Conditions Along Your Route",
      description: "Alert Group To Unstable Conditions",
      component: <MonitorConditions />,
    },
    {
      title: "Check In With The Group",
      description: "Reassess Your Plan",
      component: <CheckIn />,
    },
    {
      title: "Recognize Avalanche Terrain",
      description: "Assess Consequences",
      component: <RecognizeAvalancheTerrain />,
    },
    {
      title: "Use Terrain To Reduce Your Risk",
      description: "Manage The Group",
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
