import { Model, DataTypes } from 'sequelize';
import { sequelize } from "@app/server/database";


export class Product extends Model {
    public id!: number;
    public productId!: string;
    public price!: number;
  }
  
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
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