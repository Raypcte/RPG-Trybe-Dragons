import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instance = 0;
 
  constructor(name: string) {
    super(name);
    Mage._instance += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }

  get energyType(): string {
    return this._energyType;
  }
}

export default Mage;
