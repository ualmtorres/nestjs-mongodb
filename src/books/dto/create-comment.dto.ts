import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/schemas/user.schema';
export class CreateCommentDto {
  @ApiProperty({ example: 'Esperaba más' })
  readonly title: string;

  @ApiProperty({
    example: 3,
  })
  readonly stars: number;

  @ApiProperty({
    example:
      'Nisi officia fugiat id nulla laboris ex. Sit laboris culpa occaecat occaecat aliquip dolor non excepteur reprehenderit.',
  })
  readonly comment: string;

  @ApiProperty({ example: 'johndoe' })
  readonly username: User;
}
