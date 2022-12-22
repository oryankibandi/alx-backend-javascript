import ClassRoom from './0-classroom.js';

const initializeRooms = () => {
  const objs = [];

  objs.push(new ClassRoom(19));
  objs.push(new ClassRoom(19));
  objs.push(new ClassRoom(19));

  return objs;
}

module.exports = initializeRooms;
