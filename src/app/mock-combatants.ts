import { Combatant } from './combatant';

export const MockCombatants: Combatant[] = [
  {
    name: 'Joe',
    type: 'Player',
    score: 15,
    color: 'green',
    ac: 14,
  },
  {
    name: 'Jack',
    type: 'Player',
    score: 16,
    color: 'green',
    ac: 16,
  },
  {
    name: 'Jules',
    type: 'NPC',
    score: 17,
    color: 'blue',
    ac: 13,
  },
  {
    name: 'Ryan',
    type: 'Monster',
    score: 15,
    color: 'red',
    ac: '?',
  },
];
