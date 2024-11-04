import Team from './team';

const team = new Team();
team.add({ name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 });
team.add({ name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 50, defence: 20 });

for (const character of team) {
  console.log(character);
}
