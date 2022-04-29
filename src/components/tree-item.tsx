// Libs
import { useState } from 'react';

// Components
import { StructureNode } from './tree-menu';

// Styles
import classes from './tree-item.module.scss';

type TreeItemProps = {
  key: string;
  element: StructureNode;
};

export function TreeItem({ element }: TreeItemProps): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  if (element.nodes)
    return (
      <>
        <li key={element.id}>
          <div
            onClick={() => setChecked(!checked)}
            className={classes.indicator}>
            {checked ? <span>&ndash;</span> : <span>+</span>}
          </div>
          <span>{element.label}</span>
          {checked && (
            <ul>
              {element.nodes.map((el: StructureNode) => (
                <TreeItem key={el.id} element={el} />
              ))}
            </ul>
          )}
        </li>
      </>
    );
  return (
    <li>
      <span>{element.label}</span>
    </li>
  );
}
