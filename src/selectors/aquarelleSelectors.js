export const getAquarellesByUser = (store, userId) => {
  return store.aquarelles.filter(aquarelle => aquarelle.authorId === userId );
};
