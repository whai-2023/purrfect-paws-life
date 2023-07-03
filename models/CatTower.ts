export type CatTower = {
  id: number
  material: string
  value: number
}

// minor detail, some "models" are interfaces, some are types
// either is fine, but we should be consistent
// also, some files export a single type as `export type`, but then
// others export a single type as `export default type`
// again either is fine, but we should be consistent
