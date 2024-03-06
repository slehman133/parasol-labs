import {calcTotalPrice} from "@/utils/cart";
import { CartItem } from "@/app/context/CartContext";

test("calcTotalPrice", () => {
    const items = [
        {
            price: 10,
            quantity: 1
        },
        {
            price: 10,
            quantity: 1
        }
    ]
    expect(calcTotalPrice(items as CartItem[])).toBe("20.00")

})