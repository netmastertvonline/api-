import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagesService } from 'src/domain/services/employees/sales/messages/messages.service';
import { CreateMessageDto } from 'src/interfaces/dtos/employees/sales/messages/create-message.dto';
import { UpdateMessageDto } from 'src/interfaces/dtos/employees/sales/messages/update-message.dto';

@Controller('employees/sales/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(@Body() createMessageDto: CreateMessageDto) {
    return await this.messagesService.create(createMessageDto);
  }

  @Get()
  async findAll() {
    return await this.messagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.messagesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return await this.messagesService.update(id, updateMessageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.messagesService.remove(id);
  }
}