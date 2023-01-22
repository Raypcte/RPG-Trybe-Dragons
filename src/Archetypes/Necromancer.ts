import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instance = 0;
 
  constructor(name: string) {
    super(name);
    Necromancer._instance += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }

  get energyType(): string {
    return this._energyType;
  }
}

export default Necromancer;
