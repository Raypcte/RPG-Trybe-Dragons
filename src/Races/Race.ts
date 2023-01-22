abstract class Race {
  // Atributos
  readonly _name: string;
  readonly _dexterity: number;

  // Dar valor aos atributos
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  // Pegar o nome
  get name(): string {
    return this._name;
  }

  // pegar destreza
  get dexterity(): number {
    return this._dexterity;
  }

  // criar quanto de instancia da raça
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
    return 1;
  }

  // retornar ponto de vida
  abstract get maxLifePoints(): number;
}

export default Race;
