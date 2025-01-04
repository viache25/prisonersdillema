import { algorithms } from "./algorithms.js";

export function battle(algo1Name, algo2Name, rounds = 5) {
    const history1 = [];
    const history2 = [];

    let score1 = 0;
    let score2 = 0;

    for (let round = 0; round < rounds; round++) {
        const decision1 = algorithms[algo1Name](history1);
        const decision2 = algorithms[algo2Name](history2);

        // battle itself
        if (decision1 && decision2) {
            score1 += 3;
            score2 += 3;
        } else if (!decision1 && decision2)
            score1 += 5;
        else if (decision1 && !decision2)
            score2 += 5;
        else {
            score1++;
            score2++;
        }

        history1.push(decision2);
        history2.push(decision1);
    }

    return {score1, score2};
}

export function tournament(algorithms, rounds = 5) {
    const algoNames = Object.keys(algorithms);
    const finalScores = {};

    algoNames.forEach(name => {
        finalScores[name] = 0;
    });

    for (let i = 0; i < algoNames.length; i++) {
        for (let j = i + 1; j < algoNames.length; j++) {
            const algo1 = algoNames[i];
            const algo2 = algoNames[j];

            const result = battle(algo1, algo2, rounds);

            finalScores[algo1] += result.score1;
            finalScores[algo2] += result.score2;
        }
    }

    return finalScores;
}