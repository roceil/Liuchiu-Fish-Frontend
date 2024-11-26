import { unitMapping } from '@/constants'

export default function useMappingUnit(unitKey: number) {
  return unitMapping.find(unit => unit.key === unitKey)
}
