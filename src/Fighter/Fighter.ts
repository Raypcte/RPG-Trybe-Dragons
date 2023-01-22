import { EnergyType } from '../Energy';

interface Figther{
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: EnergyType, 
  attack: (enemy: Figther) => void,
  special?: (enemy: Figther) => void,
  levelUp: () => void,
  receiveDamage: (attackPoints: number) => number,
}

export default Figther;