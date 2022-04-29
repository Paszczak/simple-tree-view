// Components
import { TreeMenu } from './components/tree-menu';

const STRUCTURE = [
  {
    id: 'id-0-1',
    label: 'Tree',
    nodes: [
      {
        id: 'id-0-1',
        label: 'Level 0',
        nodes: [
          {
            id: 'id-1-1',
            label: 'Level 1',
            nodes: [
              { id: 'id-2-1', label: 'Level 2' },
              { id: 'id-2-2', label: 'Level 2' },
            ],
          },
          { id: 'id-1-2', label: 'Level 1' },
          {
            id: 'id-1-3',
            label: 'Level 1',
            nodes: [
              { id: 'id-2-1', label: 'Level 2' },
              {
                id: 'id-2-2',
                label: 'Level 2',
                nodes: [
                  { id: 'id-3-1', label: 'Level 3' },
                  { id: 'id-3-2', label: 'Level 3' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'id-0-2',
        label: 'Level 0',
        nodes: [
          { id: 'id-1-1', label: 'Level 1 long label' },
          { id: 'id-1-2', label: 'Level 1' },
        ],
      },
    ],
  },
];

function App(): JSX.Element {
  return (
    <div>
      <TreeMenu structure={STRUCTURE} />
    </div>
  );
}

export default App;
