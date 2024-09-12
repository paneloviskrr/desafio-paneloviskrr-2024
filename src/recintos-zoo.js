class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: 'savana', capacidade: 10, ocupacao: 3 },
            { numero: 2, bioma: 'floresta', capacidade: 5, ocupacao: 0 }, 
            { numero: 3, bioma: 'savana e rio', capacidade: 7, ocupacao: 1 }, 
            { numero: 4, bioma: 'rio', capacidade: 8, ocupacao: 0 }, 
            { numero: 5, bioma: 'savana', capacidade: 9, ocupacao: 1 }
        ];

        this.animaisValidos = {
            LEAO: { tamanho: 3, bioma: 'savana', carnivoro: true },
            LEOPARDO: { tamanho: 2, bioma: 'savana', carnivoro: true },
            CROCODILO: { tamanho: 3, bioma: 'rio', carnivoro: true },
            MACACO: { tamanho: 1, bioma: ['savana', 'floresta'], carnivoro: false },
            GAZELA: { tamanho: 2, bioma: 'savana', carnivoro: false },
            HIPOPOTAMO: { tamanho: 4, bioma: ['savana', 'rio'], carnivoro: false }
        };
    }

    analisaRecintos(animal, quantidade) {
        if (!this.animaisValidos[animal]) {
            return { erro: "Animal inválido" };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        const especie = this.animaisValidos[animal];
        let recintosViaveis = [];

        for (let recinto of this.recintos) {
            const espacoLivre = recinto.capacidade - recinto.ocupacao;
            if (especie.bioma.includes(recinto.bioma) && espacoLivre >= especie.tamanho * quantidade) {
                recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre - especie.tamanho * quantidade} total: ${recinto.capacidade})`);
            }
        }

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
        }

        return { recintosViaveis };
    }
}

export { RecintosZoo };

