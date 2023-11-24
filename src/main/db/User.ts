import { DataTypes, Model } from "sequelize";
import sequelize from "./init";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  },
  { sequelize }
);

export default User;
