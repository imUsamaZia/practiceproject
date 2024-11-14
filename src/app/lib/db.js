const username = process.env.username;
const password = process.env.password;

export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.21sdc.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0`;
