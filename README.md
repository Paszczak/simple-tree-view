# Simpple Tree View Component

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) TypeScript template.

## Used here:

- ReactJS [www.reactjs.org](www.reactjs.org)
- Typescript [http://typescriptlang.org/](http://typescriptlang.org/)

## TreeView Component

Accepts `structure` prop written in form

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
