// employee-feedback.entity.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'employee_feedbacks' })
export class EmployeeFeedback extends Model<EmployeeFeedback> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare staffName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare department: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare designation: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare remarks: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  declare createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  declare updatedAt: Date;
}
