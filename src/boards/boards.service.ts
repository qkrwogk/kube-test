import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    return this.boardsRepository.save(createBoardDto);
  }

  findAll() {
    return this.boardsRepository.find();
  }

  findOne(id: number) {
    return this.boardsRepository.findOneBy({ id });
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.boardsRepository.update({ id }, updateBoardDto);
  }

  remove(id: number) {
    return this.boardsRepository.delete({ id });
  }
}
