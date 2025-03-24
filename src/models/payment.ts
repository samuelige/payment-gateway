import { DataTypes, Model } from "sequelize";
import { sequelize } from "@app/server/database";


// export class Payment extends Model {
//     public id!: number;
//     public transactionReference?: string;
//     public paymentLink?: string;
//     public transactionStatus?: string;
//     public status!: PaymentStatus;
//     public productId!: string;
//   }
  
//   Payment.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       transactionReference: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       paymentLink: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       transactionStatus: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       status: {
//         type: DataTypes.ENUM('notPaid', 'completed'),
//         defaultValue: 'notPaid',
//       },
//       productId: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: 'Payment',
//       tableName: 'payments',
//       timestamps: false,
//     }
//   );

export class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    transactionReference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    paymentLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transactionStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('notPaid', 'completed'),
      defaultValue: 'notPaid',
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',
    timestamps: false,
  }
);