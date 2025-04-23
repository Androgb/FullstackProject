import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  async addToCart(dto: AddToCartDto) {
    const { ownerId, productId, quantity } = dto;
    const ownerObjectId = new Types.ObjectId(ownerId);

    let cart = await this.cartModel.findOne({ owner: ownerObjectId });

    if (!cart) {
      cart = await this.cartModel.create({
        owner: new Types.ObjectId(ownerId),
        items: [{ product: productId, quantity }],
      });
    } else {
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId,
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: new Types.ObjectId(productId), quantity });
      }

      await cart.save();
    }

    return cart;
  }

  async getCart(ownerId: string) {
    const ownerObjectId = new Types.ObjectId(ownerId);
    return this.cartModel
      .findOne({ owner: ownerObjectId })
      .populate('items.product');
  }
  async removeFromCart(ownerId: string, productId: string) {
    const ownerObjectId = new Types.ObjectId(ownerId);
    const cart = await this.cartModel.findOne({ owner: ownerObjectId });
    if (!cart) return null;
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId,
    );
    await cart.save();
    return cart;
  }
  async updateQuantity(ownerId: string, productId: string, change: number) {
    const ownerObjectId = new Types.ObjectId(ownerId);
    const cart = await this.cartModel.findOne({ owner: ownerObjectId });

    if (!cart) return null;

    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += change;
      // Si la cantidad baja a 0 o menos, elimina el producto
      if (cart.items[itemIndex].quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      }
      await cart.save();
    }
    return cart;
  }
}
