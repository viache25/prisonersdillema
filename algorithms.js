export const algorithms = {
    random: (history) => {
        return Math.floor(Math.random() * 2);
    },

    onlyCoop: (history) => { //C
        return 1;
    },
    titForTat: (history) => { //C
        if (history.length == 0)
            return 1
        else
            return history.at(-1);
    },
    titForTwoTats: (history) => { //C
        if (history.length > 1)
            return history.at(-1) || history.at(-2);
        else return 1;
    },
    forgivness: (history) => {//C
        if (history.length == 0)
            return 1
        else if (Math.floor(Math.random() * 10) > 8) {
            return 1;
        }
        else
            return history.at(-1);
    },
    smtmsEvil: (history) => { //C
        if (history.length % 4 == 0)
            return 0;
        else return 1;
    },
    longMemoryGuy: (history) => {//C
        if (history.length < 3)
            return 1;
        else if (history.at(-1) + history.at(-2) + history.at(-1) < 1)
            return 0;
        return 1;
    },
    onlyDefect: (history) => { //D
        return 0;
    },
    tester: (history) => {//D
        let busted = 0;
        if (history.length < 2)
            return 0;
        else if (history.at(-1) == 1 && busted == 0)
            return 0;
        else if (history.length % 2 == 0) {
            busted = 1;
            return 1;
        }
        else {
            busted = 1;
            return 0;
        }
    },
    traitor: (history) => {//D
        if (history.length == 0)
            return 1
        else if (Math.floor(Math.random() * 10) > 8) {
            return 0;
        }
        else
            return history.at(-1);
    },
    cowboy: (history) => {//D
        for (let i = 0; i < history.length; i++) {
            if (history[i] == 0) {
                return 0;
            }
        }
        return 1;
    },
    smtmsGood: (history) => { //D
        if (Math.floor(Math.random() * 4) < 3)
            return 0;
        else return 1;
    },
    suspicious: (history) => {//D
        if (history.length < 2 || history.at(-1) && history.at(-2))
            return 1;
        else return 0;

    }



};

