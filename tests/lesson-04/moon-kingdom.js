function createCharacters(characters) {

    const characterPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        }
    })
    const possibleWinner = characterPowerUp.filter(character => character.health > 1000)
    return possibleWinner
}
const characters = [
    { name: "Mario", level: 4, health: 400 },
    { name: "Luigi", level: 3, health: 300 },
    { name: "Peach", level: 5, health: 450 },
    { name: "Bowser", level: 9, health: 800 },
];
console.log(createCharacters(characters));

function printLeaderboard(players) {
    const sorted = [...players].sort((a, b) => b.score - a.score);
    const medals = ["🥇", "🥈", "🥉"];

    sorted.forEach((player, index) => {
        const medal = medals[index] ? medals[index] + " " : "";
        console.log(`${medal}${index + 1}. ${player.name}: ${player.score}`);
    });
}
const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 850 },
    { name: "Peach", score: 1200 },
    { name: "Bowser", score: 700 },
    { name: "Yoshi", score: 950 },
];

printLeaderboard(players);