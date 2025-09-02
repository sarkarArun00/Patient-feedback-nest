import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface UserAttributes {
  id?: number;
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<UserAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;
}
