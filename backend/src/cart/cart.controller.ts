import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  add(@Body() dto: AddToCartDto) {
    return this.cartService.addToCart(dto);
  }

  @Get(':ownerId')
  getCart(@Param('ownerId') ownerId: string) {
    return this.cartService.getCart(ownerId);
  }

  @Put('remove')
  removeFromCart(@Body() dto: { ownerId: string; productId: string }) {
    return this.cartService.removeFromCart(dto.ownerId, dto.productId);
  }
  @Put('update-quantity')
  updateQuantity(
    @Body() dto: { ownerId: string; productId: string; change: number },
  ) {
    return this.cartService.updateQuantity(
      dto.ownerId,
      dto.productId,
      dto.change,
    );
  }
}
