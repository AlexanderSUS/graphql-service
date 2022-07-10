import { AppInstanse } from '../types/common';

const filterByExistance = (instaceArray: AppInstanse[]) => {
  const existentInstanceArray = instaceArray.reduce((acc: AppInstanse[], instance) => {
    if (instance._id) acc.push(instance);

    return acc;
  }, []);

  return existentInstanceArray.length ? existentInstanceArray : [];
};

export default filterByExistance;
