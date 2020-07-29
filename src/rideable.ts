export enum Rideable {
  Neutral = 0,
  Yes,
  No,
}

export const isRideable = (height: number, requirement: number): Rideable => {
  if (height === 0) {
    return Rideable.Neutral;
  }

  if (height >= requirement) {
    return Rideable.Yes;
  }

  return Rideable.No;
};
