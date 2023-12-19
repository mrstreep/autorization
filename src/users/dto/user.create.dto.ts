import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Элетронная почта',
  })
  public email: string;

  @ApiProperty({
    example: '1488sMay',
    description: 'Пароль',
  })
  public password: string;
}
