class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        const recintos = [
            { id: 1, tipo: 'MACACO', capacidade: 10, ocupacao: 4 },
            { id: 2, tipo: 'MACACO', capacidade: 5, ocupacao: 2 },
            { id: 3, tipo: 'MACACO', capacidade: 7, ocupacao: 5 },
            { id: 4, tipo: 'CROCODILO', capacidade: 8, ocupacao: 0 }
        ];

        if (animal !== 'MACACO' && animal !== 'CROCODILO') {
            return { erro: "Animal inválido", recintosViaveis: false };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: false };
        }

        const recintosViaveis = recintos.filter(recinto => recinto.tipo === animal && recinto.capacidade >= recinto.ocupacao + quantidade);

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: false };
        }

        const detalhesRecintos = recintosViaveis.map(recinto => 
            `Recinto ${recinto.id} (espaço livre: ${recinto.capacidade - recinto.ocupacao} total: ${recinto.capacidade})`
        );

        return { erro: null, recintosViaveis: detalhesRecintos };
    }
}

export { RecintosZoo as RecintosZoo };
