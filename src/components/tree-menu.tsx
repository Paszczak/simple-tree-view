import { TreeItem } from './tree-item';

import classes from './tree-menu.module.scss';

export type StructureNode = {
  id: string;
  label: string;
  nodes?: StructureNode[];
};

type TreeMenuProps = {
  structure: StructureNode[];
};

export function TreeMenu({ structure }: TreeMenuProps) {
  return (
    <>
      <ul className={classes.tree}>
        {structure.map((element: StructureNode) => (
          <TreeItem key={element.id} element={element} />
        ))}
      </ul>
    </>
  );
}
