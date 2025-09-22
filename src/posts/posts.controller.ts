import { Controller, Get, Body, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post-dto';

@Controller('Posts')
export class PostsController {
  constructor(private readonly PostsService: PostsService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.PostsService.findAll();
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.PostsService.create(createPostDto);
  }
}
