import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'client_feedbacks' })
export class ClientFeedback extends Model<ClientFeedback> {
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
  clientName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  clientCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  remarks: string;

  @Column(DataType.STRING)
  communication: string;   // Clarity and effectiveness of communication

  @Column(DataType.STRING)
  reliabilityOfTests: string;  // Range & reliability of tests offered

  @Column(DataType.STRING)
  turnaroundTime: string;   // Turnaround time & accuracy of reports

  @Column(DataType.STRING)
  problemResolution: string;  // Problem resolution & support

  @Column(DataType.STRING)
  digitalIntegration: string; // Digital integration & report delivery

  @Column(DataType.STRING)
  pricingTransparency: string; // Transparency in pricing & billing

  @Column(DataType.STRING)
  overallSatisfaction: string; // Overall partnership satisfaction

  @Column(DataType.STRING)
  coldChainMaintenance: string; // Cold chain maintenance

@Column({
  type: DataType.STRING,
  allowNull: true,
})
declare adminComment: string | null;

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
