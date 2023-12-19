// import { Model } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface IUserCreationAttrs {
  email: string;
  password: string;
}

@Table
export class User extends Model<User, IUserCreationAttrs> {
  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Элетронная почта, введенная при регистрации',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({
    example: '1488sMay',
    description: 'Пароль, введенный при регистрации',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
