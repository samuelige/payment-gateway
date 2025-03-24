// import { Model, DataTypes } from 'sequelize';
// import { sequelize } from "@app/server/database";


// export class Product extends Model {
//     public id!: number;
//     public name!: string;
//     public price!: string;
//   }
  
//   Product.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       price: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: 'Product',
//       tableName: 'products',
//       timestamps: false, 
//     }
//   );

import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from "@app/server/database";

export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false, 
  }
);