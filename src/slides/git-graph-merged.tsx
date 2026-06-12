import { FunctionalComponent } from "preact";
import { GitGraphBase } from "./git-graph";

/**
 * Same git graph as GitGraph, but rendered in its merged "result" state:
 * main is highlighted as the source of truth and the feature branches are
 * dimmed to show everything has been reconciled.
 */
export const GitGraphMerged: FunctionalComponent = () => <GitGraphBase merged />;
