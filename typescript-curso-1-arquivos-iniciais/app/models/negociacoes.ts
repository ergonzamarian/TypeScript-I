import { Negociacao } from "./negociacao.js";

// Negociacao [] é a mesma coisa que Array<Negociacao>
export class Negociacoes {

    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return [...this.negociacoes];
    }
}