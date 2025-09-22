import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post-dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.uuid = crypto.randomUUID();
    post.title = createPostDto.title;
    post.body = createPostDto.body;

    return this.postRepository.save(post);
  }
}
