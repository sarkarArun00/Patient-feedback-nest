import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'patient_feedbacks' })
export class PatientFeedback extends Model<PatientFeedback> {
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
  declare patientName: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare remarks: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare efficiencyOfRegistration: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare staffBehaviour: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare cleanliness: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare turnaroundTime: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare clarityOfReports: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare informationProvided: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare overallExperience: string;

@Column({
  type: DataType.STRING,
  allowNull: true,
})
declare adminComment: string | null;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  declare createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  declare updatedAt: Date;
}
