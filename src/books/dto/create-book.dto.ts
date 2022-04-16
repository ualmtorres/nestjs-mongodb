import { ApiProperty } from '@nestjs/swagger';
export class CreateBookDto {
  @ApiProperty({
    example: 'Nest.js: A Progressive Node.js Framework (English Edition)',
  })
  readonly title: string;

  @ApiProperty({ example: 'Web Development' })
  readonly genre: string;

  @ApiProperty({
    example:
      'JavaScript frameworks go in and out of style very quickly as web technologies change and grow. Nest.js is a good starting point for many developers that are looking to use a modern web framework because it uses a language that is very similar to that of the most used language on the web to this day, JavaScript...',
  })
  readonly description: string;

  @ApiProperty({ example: 'Jay Bell' })
  readonly author: string;

  @ApiProperty({ example: 350 })
  readonly pages: number;

  @ApiProperty({
    example: 'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg',
  })
  readonly image_url: string;

  @ApiProperty({ example: ['NestJS', 'REST API'] })
  readonly keywords: string[];
}
