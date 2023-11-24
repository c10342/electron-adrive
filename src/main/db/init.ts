import { app } from "electron";
import { Sequelize } from "sequelize";
import path from "path";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(app.getPath("appData"), "database.sqlite"),
  define: {
    // 转换列名的驼峰命名规则为下划线命令规则
    underscored: true,
    // timestamps:true  所有表都会自动加上createAt和updateAt这2个字段
    timestamps: true,
    // 软删除，并添加deleteAt这个字段
    paranoid: true
  }
});
// 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
sequelize.sync();

export default sequelize;
