import mongoose from "mongoose";

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  // Si ya está conectado, no hace nada
  if (mongoConnection.isConnected === 1) {
    console.log("Ya está conectado");
    return;
  }

  //   Ya hay una conexión en curso
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Usando Conextion anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGODB_URI || "", {});
  mongoConnection.isConnected = 1;
  console.log("Conectado a MongoDB", process.env.MONGODB_URI);
};

export const disconnect = async () => {
  if (mongoConnection.isConnected !== 0) {
    await mongoose.disconnect();
    console.log("Desconectado de MongoDB");
  }
};
